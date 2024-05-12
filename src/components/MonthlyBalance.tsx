import { Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import { Item } from '../hooks/useIncomeExpense'
import { IncomeExpenseDisplayItem } from './item/IncomeExpenseDisplayItem'
// ______________________________________________________
//
type ContainerProps = Omit<
  Props,
  'incomeExpenseAmount' | 'moneyColor' | 'incomeItemsAmount' | 'expenseItemsAmount'
>

type Props = {
  expenseItems: Item[]
  expenseItemsAmount: number
  incomeExpenseAmount: number
  incomeItems: Item[]
  incomeItemsAmount: number
  moneyColor: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <VStack borderBottom={'1px solid #000'} pb={2} spacing={'6'} width={'100%'}>
    <VStack>
      <Text fontSize={'30px'} fontWeight={'bold'}>
        - 残高 -
      </Text>
      <Text color={props.moneyColor} fontSize={'40px'} fontWeight={'bold'} width={'100%'}>
        {props.incomeExpenseAmount.toLocaleString()}
        <Text as={'span'} fontSize={'30px'} fontWeight={'normal'}>
          円
        </Text>
      </Text>
    </VStack>
    {/* 収支を表示する */}
    <Stack direction={{ base: 'column', lg: 'row' }} spacing={'8'}>
      <IncomeExpenseDisplayItem
        label={'支出'}
        labelColor={'red.400'}
        totalAmount={props.expenseItemsAmount}
      />
      <IncomeExpenseDisplayItem
        label={'収入'}
        labelColor={'green.500'}
        totalAmount={props.incomeItemsAmount}
      />
    </Stack>
  </VStack>
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

  return (
    <Component
      {...props}
      expenseItemsAmount={expenseItemsAmount}
      incomeExpenseAmount={incomeExpenseAmount}
      incomeItemsAmount={incomeItemsAmount}
      moneyColor={moneyColor}
    />
  )
}
// ______________________________________________________
//
export const MonthlyBalance = Container
