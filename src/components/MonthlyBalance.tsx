import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

import { Item } from '../hooks/useIncomeExpense'
// ______________________________________________________
//
type ContainerProps = Omit<Props, 'incomeExpenseAmount' | 'moneyColor'>

type Props = {
  expenseItems: Item[]
  incomeExpenseAmount: number
  incomeItems: Item[]
  moneyColor: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <Stack>
    <Text fontSize={'30px'} fontWeight={'bold'}>
      - 収支合計 -
    </Text>
    <Text borderBottom={'1px solid #000'} color={props.moneyColor} fontSize={'40px'}>
      {props.incomeExpenseAmount.toLocaleString()}
      <Text as={'span'}>円</Text>
    </Text>
  </Stack>
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  // 収入の合計金額
  const incomeItemsAmount = props.incomeItems.reduce((total, item) => total + item.amount, 0)
  // 支出の合計金額
  const expenseItemsAmount = props.expenseItems.reduce((total, item) => total + item.amount, 0)
  // 収支合計金額
  const incomeExpenseAmount = incomeItemsAmount - expenseItemsAmount

  const moneyColor = incomeExpenseAmount < 0 ? 'red.500' : 'blue.600'

  return <Component {...props} incomeExpenseAmount={incomeExpenseAmount} moneyColor={moneyColor} />
}
// ______________________________________________________
//
export const MonthlyBalance = Container
