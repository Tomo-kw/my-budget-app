// ______________________________________________________

import { collection, doc, getDocs } from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'

import { Header } from '../components/Header'
import { IncomeExpenseForm } from '../components/IncomeExpenseForm'
import { IncomeExpenseList } from '../components/IncomeExpenseList'
import { IncomeExpensePieChart } from '../components/IncomeExpensePieChart'
import { MonthlyBalance } from '../components/MonthlyBalance'
import { db } from '../firebase'
import { DisplayType, Item, useIncomeExpense } from '../hooks/useIncomeExpense'
import { ContentContainer } from '../layouts/ContentContainer'
// handleSubmitClick: ReturnType<typeof useReservationForm>['handleSubmitClick']
type ContainerProps = {
  // ayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
}

type Props = {
  category: ReturnType<typeof useIncomeExpense>['category']
  // currentMonth: ReturnType<typeof useIncomeExpense>['currentMonth']
  // currentYear: ReturnType<typeof useIncomeExpense>['currentYear']
  currentDisplayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
  handleSubmitClick: ReturnType<typeof useIncomeExpense>['handleSubmitClick']
  expenseItems: Item[]
  handleLastMonthClick: ReturnType<typeof useIncomeExpense>['handleLastMonthClick']
  handleExpenseDeleteClick: ReturnType<typeof useIncomeExpense>['handleExpenseDeleteClick']
  handleIncomeDeleteClick: ReturnType<typeof useIncomeExpense>['handleIncomeDeleteClick']
  incomeItems: Item[]
  handleNextMonthClick: ReturnType<typeof useIncomeExpense>['handleNextMonthClick']
  currentDate: Date
  setAmount: Dispatch<SetStateAction<number>>
  setCategory: Dispatch<SetStateAction<string>>
  setType: Dispatch<SetStateAction<string>>
  setCurrentDisplayType: Dispatch<SetStateAction<DisplayType>>
}

// 以下でデータを渡す
const Component = (props: Props) => (
  <ContentContainer>
    <Header
      // currentYear={props.currentYear}
      // currentMonth={props.currentMonth}
      currentDate={props.currentDate}
      handleLastMonthClick={props.handleLastMonthClick}
      handleNextMonthClick={props.handleNextMonthClick}
      // incomeItems={props.incomeItems}
      // expenseItems={props.expenseItems}
    />
    <MonthlyBalance incomeItems={props.incomeItems} expenseItems={props.expenseItems} />
    <IncomeExpenseForm
      category={props.category}
      currentDisplayType={props.currentDisplayType}
      handleSubmitClick={props.handleSubmitClick}
      setAmount={props.setAmount}
      setCategory={props.setCategory}
      setCurrentDisplayType={props.setCurrentDisplayType}
      setType={props.setType}
    />
    <IncomeExpensePieChart expenseItems={props.expenseItems} incomeItems={props.incomeItems} />
    <IncomeExpenseList
      expenseItems={props.expenseItems}
      handleIncomeDeleteClick={props.handleIncomeDeleteClick}
      handleExpenseDeleteClick={props.handleExpenseDeleteClick}
      incomeItems={props.incomeItems}
    />
  </ContentContainer>
)
// ______________________________________________________
//

const Container: React.FC<ContainerProps> = () => {
  const {
    category,
    currentDisplayType,
    currentMonth,
    currentYear,
    currentDate,
    expenseItems,
    handleSubmitClick,
    handleNextMonthClick,
    handleLastMonthClick,
    handleExpenseDeleteClick,
    handleIncomeDeleteClick,
    incomeItems,
    setAmount,
    setCategory,
    setCurrentDisplayType,
    setType,
  } = useIncomeExpense()
  // const incomeItems = collection(db, 'incomeItems')
  // getDocs(incomeItems).then((querySnapshots) => {
  //   console.log(querySnapshots.docs.map((doc) => doc.data()))
  // })

  return (
    <Component
      category={category}
      currentDate={currentDate}
      currentDisplayType={currentDisplayType}
      expenseItems={expenseItems}
      handleExpenseDeleteClick={handleExpenseDeleteClick}
      handleIncomeDeleteClick={handleIncomeDeleteClick}
      handleLastMonthClick={handleLastMonthClick}
      handleNextMonthClick={handleNextMonthClick}
      handleSubmitClick={handleSubmitClick}
      incomeItems={incomeItems}
      setAmount={setAmount}
      setCategory={setCategory}
      setCurrentDisplayType={setCurrentDisplayType}
      setType={setType}
    />
  )
}
// ______________________________________________________
//
export const IncomeExpense = Container
