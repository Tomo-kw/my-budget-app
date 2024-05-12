import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

// ______________________________________________________
//
type ContainerProps = Omit<
  Props,
  'incomeExpenseAmount' | 'moneyColor' | 'incomeItemsAmount' | 'expenseItemsAmount'
>

type Props = {
  label: string
  labelColor: string
  totalAmount: number
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <VStack
    align={'center'}
    backgroundColor={props.labelColor}
    borderRadius={'5px'}
    color={'#fff'}
    flexDirection={{ base: 'row', lg: 'row' }}
    justifyContent={'center'}
    padding={'0.5rem'}
    spacing={'4'}
    width={'300px'}
  >
    <Text color={'#000'} fontSize={'18px'}>
      {props.label}
    </Text>
    <Text fontSize={'26px'}>{`${props.totalAmount.toLocaleString()}円`}</Text>
  </VStack>
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const IncomeExpenseDisplayItem = Container
