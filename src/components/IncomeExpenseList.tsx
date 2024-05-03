import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

import { Item, useIncomeExpense } from '../hooks/useIncomeExpense'

type ContainerProps = Props
type Props = {
  expenseItems: Item[]
  handleExpenseDeleteClick: ReturnType<typeof useIncomeExpense>['handleExpenseDeleteClick']
  handleIncomeDeleteClick: ReturnType<typeof useIncomeExpense>['handleIncomeDeleteClick']
  incomeItems: Item[]
}

const Component: React.FC<Props> = (props) => {
  return (
    <HStack alignItems={'flex-start'} gap={'10'} justifyContent={'space-evenly'}>
      <VStack>
        <Text fontSize={'24px'} fontWeight={'bold'}>
          支出一覧
        </Text>
        {props.expenseItems.length > 0 &&
          props.expenseItems.map((item) => (
            <HStack key={item.id}>
              <HStack width={'250px'}>
                <Text>{item.date.day}日</Text>
                <Text textAlign={'left'} width={'70px'}>
                  {item.category}
                </Text>
                <Text>
                  {item.amount.toLocaleString()}
                  <Text as={'span'}>円</Text>
                </Text>
              </HStack>
              <Button
                bg={'red.400'}
                color={'#fff'}
                onClick={() => props.handleExpenseDeleteClick(item.id)}
              >
                削除
              </Button>
            </HStack>
          ))}
      </VStack>

      <VStack>
        <Text fontSize={'24px'} fontWeight={'bold'}>
          収入一覧
        </Text>
        {props.incomeItems.length > 0 &&
          props.incomeItems.map((item) => (
            <HStack key={item.id}>
              <HStack width={'250px'}>
                <Text>{item.date.day}日</Text>
                <Text textAlign={'left'} width={'70px'}>
                  {item.category}
                </Text>
                <Text>
                  {item.amount.toLocaleString()}
                  <Text as={'span'}>円</Text>
                </Text>
              </HStack>
              <Button
                bg={'red.400'}
                color={'#fff'}
                onClick={() => props.handleIncomeDeleteClick(item.id)}
              >
                削除
              </Button>
            </HStack>
          ))}
      </VStack>
    </HStack>
  )
}

const Container: React.FC<ContainerProps> = (props) => {
  // 日付で並び替え
  return <Component {...props} />
}

export const IncomeExpenseList = Container
