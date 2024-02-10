import { Box, Stack, Text } from '@chakra-ui/react'

import { Item } from '../hooks/useIncomeExpense'

type ContainerProps = Omit<Props, 'incomExpenseAmount'>

type Props = {
  expenseItems: Item[]
  incomExpenseAmount: number
  incomeItems: Item[]
}

const Component: React.FC<Props> = (props) => {
  return (
    <Stack>
      <Text fontSize={'30px'}>- 収支合計 -</Text>
      <Text borderBottom={'1px solid #000'} fontSize={'40px'} paddingBottom={'3px'}>
        {props.incomExpenseAmount.toLocaleString()}
        <Text as={'span'}>円</Text>
      </Text>
    </Stack>
  )
}

const Container: React.FC<ContainerProps> = (props) => {
  const incomeItemsAmount = props.incomeItems.reduce((total, item) => total + item.amount, 0)
  const expenseItemsAmount = props.expenseItems.reduce((total, item) => total + item.amount, 0)
  const incomExpenseAmount = incomeItemsAmount - expenseItemsAmount

  return <Component {...props} incomExpenseAmount={incomExpenseAmount} />
}

export const MonthlyBalance = Container
