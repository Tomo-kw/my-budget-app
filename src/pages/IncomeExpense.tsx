// ______________________________________________________

import { collection, doc, getDocs } from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'

import { IncomeExpenseForm } from '../components/IncomeExpenseForm'
import { IncomeExpenseList } from '../components/IncomeExpenseList'
import { IncomeExpensePieChart } from '../components/IncomeExpensePieChart'
import { MonthlyBalance } from '../components/MonthlyBalance'
import { YearMonthDisplay } from '../components/YearMonthDisplay'
import { db } from '../firebase'
import { DisplayType, Item, useIncomeExpense } from '../hooks/useIncomeExpense'
import { ContentContainer } from '../layouts/ContentContainer'
// handleSubmitClick: ReturnType<typeof useReservationForm>['handleSubmitClick']
type ContainerProps = {
  // ayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
}

type Props = {
  category: ReturnType<typeof useIncomeExpense>['category']
  currentDate: Date
  // currentMonth: ReturnType<typeof useIncomeExpense>['currentMonth']
  // currentYear: ReturnType<typeof useIncomeExpense>['currentYear']
  currentDisplayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
  expenseItems: Item[]
  handleExpenseDeleteClick: ReturnType<typeof useIncomeExpense>['handleExpenseDeleteClick']
  handleIncomeDeleteClick: ReturnType<typeof useIncomeExpense>['handleIncomeDeleteClick']
  handleLastMonthClick: ReturnType<typeof useIncomeExpense>['handleLastMonthClick']
  handleNextMonthClick: ReturnType<typeof useIncomeExpense>['handleNextMonthClick']
  handleSubmitClick: ReturnType<typeof useIncomeExpense>['handleSubmitClick']
  incomeItems: Item[]
  setAmount: Dispatch<SetStateAction<number>>
  setCategory: Dispatch<SetStateAction<string>>
  setCurrentDisplayType: Dispatch<SetStateAction<DisplayType>>
  setType: Dispatch<SetStateAction<string>>
}

// 以下でデータを渡す
const Component = (props: Props) => (
  <ContentContainer>
    <YearMonthDisplay
      // currentYear={props.currentYear}
      // currentMonth={props.currentMonth}
      currentDate={props.currentDate}
      handleLastMonthClick={props.handleLastMonthClick}
      handleNextMonthClick={props.handleNextMonthClick}
      // incomeItems={props.incomeItems}
      // expenseItems={props.expenseItems}
    />
    <MonthlyBalance expenseItems={props.expenseItems} incomeItems={props.incomeItems} />
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
      handleExpenseDeleteClick={props.handleExpenseDeleteClick}
      handleIncomeDeleteClick={props.handleIncomeDeleteClick}
      incomeItems={props.incomeItems}
    />
  </ContentContainer>
)
// ______________________________________________________
//

const Container: React.FC<ContainerProps> = () => {
  const {
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
  } = useIncomeExpense()

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
