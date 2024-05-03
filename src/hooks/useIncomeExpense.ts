import { useToast } from '@chakra-ui/react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  endAt,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  startAt,
  Timestamp,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { auth, db } from '../firebase'

export type DisplayType = 'expense' | 'income'

export type Item = {
  amount: number
  category: string
  date: {
    day: number
    month: number
    year: number
  }
  id: string
  timestamp: Timestamp
}

export const useIncomeExpense = () => {
  const now = new Date()

  const [currentDisplayType, setCurrentDisplayType] = useState<DisplayType>('expense')

  // 収入のリスト
  const [incomeItems, setIncomeItems] = useState<Item[]>([])

  // 支出のリスト
  const [expenseItems, setExpenseItems] = useState<Item[]>([])

  // 現在開いているページの年月
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  // 現在の年月と開いているページの年月が同じかどうか
  const [isCurrentMonth, setIsCurrentMonth] = useState<boolean>(true)

  const toast = useToast()

  // 収入 or 支出の金額
  const [amount, setAmount] = useState<number>(0)

  const [category, setCategory] = useState<string>('食費')

  // firebaseからデータを取得する
  useEffect(() => {
    // 収入
    getIncomData()

    // 支出
    getExpenseData()
  }, [currentDate])

  const getIncomData = () => {
    const incomeData = collection(db, 'incomeItems')
    const qi = query(
      incomeData,
      where('uid', '==', auth.currentUser?.uid.toString()),
      orderBy('timestamp', 'asc'),
      startAt(getStartDate(currentDate)),
      endAt(getEndDate(currentDate))
    )

    onSnapshot(qi, (querySnapshots) => {
      setIncomeItems(
        querySnapshots.docs.map((doc) => {
          const data = doc.data() as Item

          data.id = doc.id

          data.date = {
            day: data.timestamp.toDate().getDate(),
            month: data.timestamp.toDate().getMonth(),
            year: data.timestamp.toDate().getFullYear(),
          }

          return data
        })
      )
    })
  }

  const getExpenseData = () => {
    const expenseData = collection(db, 'expenseItems')
    const qe = query(
      expenseData,
      where('uid', '==', auth.currentUser!.uid.toString()),
      orderBy('timestamp', 'asc'),
      startAt(getStartDate(currentDate)),
      endAt(getEndDate(currentDate))
    )

    onSnapshot(qe, (querySnapshots) => {
      setExpenseItems(
        querySnapshots.docs.map((doc) => {
          const data = doc.data() as Item

          data.id = doc.id

          data.date = {
            day: data.timestamp.toDate().getDate(),
            month: data.timestamp.toDate().getMonth(),
            year: data.timestamp.toDate().getFullYear(),
          }
          return data
        })
      )
    })
  }

  // 月初を取得する
  const getStartDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    return new Date(year, month, 1, 0, 0, 0)
  }
  // 月末を取得する
  const getEndDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const lastDayOfMonth = new Date(year, month + 1, 0)
    return new Date(year, month, lastDayOfMonth.getDate(), 23, 59, 59)
  }

  useEffect(() => {
    if (currentDisplayType === 'expense') {
      setCategory('食費')
    } else {
      setCategory('給料')
    }
  }, [currentDisplayType])

  // 収支の登録処理
  const handleSubmitClick = () => {
    // firebaseのデータベースにデータを追加する
    const seveDb = currentDisplayType === 'expense' ? 'expenseItems' : 'incomeItems'

    if (amount <= 0) {
      toast({
        duration: 9000,
        isClosable: true,
        position: 'top',
        status: 'error',
        title: '金額を入力してください',
      })
      return
    }

    addDoc(collection(db, seveDb), {
      amount: amount,
      category: category,
      timestamp: serverTimestamp(),
      uid: auth.currentUser!.uid,
    })

    setAmount(0)

    toast({
      duration: 9000,
      isClosable: true,
      position: 'top',
      status: 'success',
      title: '登録しました',
    })
  }

  // 来月分の収支画面を表示する
  const handleNextMonthClick = () => {
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    if (currentMonth > 11) {
      // 12月の場合は翌年の1月にする
      currentMonth = 0
      currentYear += 1
    }
    setCurrentDate(new Date(currentYear, currentMonth + 1))
    checkMonthEquality(currentYear, currentMonth + 1)
  }

  // 先月分の収支画面を表示する
  const handleLastMonthClick = () => {
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    if (currentMonth < 0) {
      // 1月の場合は前年の12月にする
      currentYear -= 1
      currentMonth = 11
    }
    setCurrentDate(new Date(currentYear, currentMonth - 1))
    checkMonthEquality(currentYear, currentMonth - 1)
  }

  // 支出データを削除する
  const handleExpenseDeleteClick = async (id: string) => {
    await deleteDoc(doc(db, 'expenseItems', id))
    toast({
      duration: 9000,
      isClosable: true,
      position: 'top',
      status: 'error',
      title: '削除しました',
    })
  }

  // 収入データを削除する
  const handleIncomeDeleteClick = async (id: string) => {
    await deleteDoc(doc(db, 'incomeItems', id))
    toast({
      duration: 9000,
      isClosable: true,
      position: 'top',
      status: 'error',
      title: '削除しました',
    })
  }

  // 現在の年月と開いているページの年月が同じかどうかの判定
  const checkMonthEquality = (currentYear: number, currentMonth: number) => {
    setIsCurrentMonth(now.getFullYear() === currentYear && now.getMonth() === currentMonth)
  }

  return {
    amount,
    category,
    currentDate,
    currentDisplayType,
    expenseItems,
    handleExpenseDeleteClick,
    handleIncomeDeleteClick,
    handleLastMonthClick,
    handleNextMonthClick,
    handleSubmitClick,
    incomeItems,
    isCurrentMonth,
    setAmount,
    setCategory,
    setCurrentDisplayType,
  }
}
