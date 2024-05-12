import { Stack } from '@chakra-ui/react'
import React from 'react'

import { Item, useIncomeExpense } from '../hooks/useIncomeExpense'
import { BudgetItem } from './item/BudgetItem'
// ______________________________________________________
//
type ContainerProps = Props
type Props = {
  expenseItems: Item[]
  handleExpenseDeleteClick: ReturnType<typeof useIncomeExpense>['handleExpenseDeleteClick']
  handleIncomeDeleteClick: ReturnType<typeof useIncomeExpense>['handleIncomeDeleteClick']
  incomeItems: Item[]
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <Stack
    alignItems={{ base: 'center', lg: 'flex-start' }}
    flexDirection={{ base: 'column', md: 'row' }}
    gap={10}
    justifyContent={'space-evenly'}
  >
    <BudgetItem
      budgetItems={props.expenseItems}
      handleBudgetDeleteClick={props.handleExpenseDeleteClick}
      label="支出"
    />
    <BudgetItem
      budgetItems={props.incomeItems}
      handleBudgetDeleteClick={props.handleIncomeDeleteClick}
      label="収入"
    />
  </Stack>
  //
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const IncomeExpenseList = Container
