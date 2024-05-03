import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

import { useIncomeExpense } from '../hooks/useIncomeExpense'
// ______________________________________________________
//
type ContainerProps = Props

type Props = {
  currentDate: Date
  handleLastMonthClick: ReturnType<typeof useIncomeExpense>['handleLastMonthClick']
  handleNextMonthClick: ReturnType<typeof useIncomeExpense>['handleNextMonthClick']
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <HStack fontSize={{ base: '28px', md: '40px' }} justifyContent={'center'}>
    <Text as={'span'} cursor={'pointer'} onClick={props.handleLastMonthClick}>
      ◀︎
    </Text>
    <Text mx={'0.5em'}>{`${props.currentDate.getFullYear()}年${
      props.currentDate.getMonth() + 1
    }月`}</Text>
    <Text as={'span'} cursor={'pointer'} onClick={props.handleNextMonthClick}>
      ▶︎
    </Text>
  </HStack>
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const YearMonthDisplay = Container
