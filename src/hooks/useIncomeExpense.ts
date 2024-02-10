import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  endAt,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  startAt,
  Timestamp,
  where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

import { db } from '../firebase'

export type DisplayType = 'expense' | 'income'

// 型ファイル作る？
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
  const [currentDisplayType, setCurrentDisplayType] = useState<DisplayType>('expense')

  // 収入のリスト
  const [incomeItems, setIncomeItems] = useState<Item[]>([])

  // 支出のリスト
  const [expenseItems, setExpenseItems] = useState<Item[]>([])

  // 現在の日付
  const [currentDate, setCurrentDate] = useState(new Date())

  // 現在の日付から月初・月末を求める方法→関数を作れば良い？
  // 更新後も月を±すればそのまま

  // 表示する年
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  // 表示する月
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)
  const [startDate, setStartDate] = useState(new Date(currentYear, currentMonth - 1, 1, 0, 0, 0))
  const [endDate, setEndDate] = useState(new Date(currentYear, currentMonth, 0, 23, 59, 59))

  // 登録する値を格納する
  // 収入 or 支出の金額
  const [amount, setAmount] = useState<number>(0)

  // 収入・支出のどちらか
  const [type, setType] = useState<string>('expence')

  const [category, setCategory] = useState<string>('食費')

  // firebaseからデータを取得する→先月・次月で変更する：第二引数
  // 変更する必要があるもの：startDate,endDate
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
    const startDate = new Date(year, month, 1, 0, 0, 0)
    return startDate
  }
  // 月末を取得する
  const getEndDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const lastDayOfMonth = new Date(year, month + 1, 0)
    const endDate = new Date(year, month, lastDayOfMonth.getDate(), 23, 59, 59)
    return endDate
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
    // e.preventDefault()
    let seveDb = ''
    if (currentDisplayType === 'expense') {
      seveDb = 'expenseItems'
    } else {
      seveDb = 'incomeItems'
    }

    addDoc(collection(db, seveDb), {
      amount: amount,
      category: category,
      timestamp: serverTimestamp(),
    })
  }

  // 先月分の収支画面を表示する
  const handleNextMonthClick = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    setCurrentDate(new Date(year, month + 1))
  }

  // 先月分の収支画面を表示する
  const handleLastMonthClick = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    setCurrentDate(new Date(year, month - 1))
  }

  // 支出データを削除する
  const handleExpenseDeleteClick = async (id: string) => {
    await deleteDoc(doc(db, 'expenseItems', id))
  }

  // 収入データを削除する
  const handleIncomeDeleteClick = async (id: string) => {
    await deleteDoc(doc(db, 'incomeItems', id))
  }

  //
  return {
    category,
    currentDate,
    currentDisplayType,
    currentMonth,
    currentYear,
    expenseItems,
    handleExpenseDeleteClick,
    handleIncomeDeleteClick,
    handleLastMonthClick,
    handleNextMonthClick,
    handleSubmitClick,
    incomeItems,
    setAmount,
    setCategory,
    setCurrentDisplayType,
    setType,
  }
}
