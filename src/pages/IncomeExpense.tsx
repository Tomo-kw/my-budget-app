// ______________________________________________________

import { Dispatch, SetStateAction } from 'react'

import { IncomeExpenseForm } from '../components/IncomeExpenseForm'
import { IncomeExpenseList } from '../components/IncomeExpenseList'
import { IncomeExpensePieChart } from '../components/IncomeExpensePieChart'
import { MonthlyBalance } from '../components/MonthlyBalance'
import { YearMonthDisplay } from '../components/YearMonthDisplay'
import { db } from '../firebase'
import { DisplayType, Item, useIncomeExpense } from '../hooks/useIncomeExpense'
import { ContentContainer } from '../layouts/ContentContainer'
type ContainerProps = {
  // ayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
}

type Props = {
  amount: number
  category: ReturnType<typeof useIncomeExpense>['category']
  currentDate: Date
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
      currentDate={props.currentDate}
      handleLastMonthClick={props.handleLastMonthClick}
      handleNextMonthClick={props.handleNextMonthClick}
    />
    <MonthlyBalance expenseItems={props.expenseItems} incomeItems={props.incomeItems} />
    <IncomeExpenseForm
      amount={props.amount}
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
    setAmount,
    setCategory,
    setCurrentDisplayType,
    setType,
  } = useIncomeExpense()

  return (
    <Component
      amount={amount}
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
