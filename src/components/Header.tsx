import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'

import { Item, useIncomeExpense } from '../hooks/useIncomeExpense'
import { IncomeExpensePieChart } from './IncomeExpensePieChart'

type ContainerProps = Props

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  // currentMonth: ReturnType<typeof useIncomeExpense>['currentMonth']
  // currentYear: ReturnType<typeof useIncomeExpense>['currentYear']
  currentDate: Date
  handleLastMonthClick: ReturnType<typeof useIncomeExpense>['handleLastMonthClick']
  handleNextMonthClick: ReturnType<typeof useIncomeExpense>['handleNextMonthClick']
  // incomeItems: Item[]
  // expenseItems: Item[]
  // incomExpenseAmount: number
}

const Component: React.FC<Props> = (props) => {
  return (
    <Stack>
      <Flex justify={'start'}>
        <Text as={'h1'} fontSize={'44px'}>
          MyBudgetApp
        </Text>
      </Flex>

      <HStack fontSize={'40px'} justifyContent={'center'}>
        <Text as={'span'} cursor={'pointer'} onClick={props.handleLastMonthClick}>
          ◀︎
        </Text>
        {/* <Text mx={'0.5em'}>2023年07月</Text> */}
        {/* <Text mx={'0.5em'}>{`${props.currentYear}年${props.currentMonth}月`}</Text> */}
        <Text mx={'0.5em'}>{`${props.currentDate.getFullYear()}年${
          props.currentDate.getMonth() + 1
        }月`}</Text>
        <Text as={'span'} cursor={'pointer'} onClick={props.handleNextMonthClick}>
          ▶︎
        </Text>
      </HStack>
    </Stack>
  )
}

const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}

export const Header = Container
