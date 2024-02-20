import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction } from 'react'

import { Item, useIncomeExpense } from '../hooks/useIncomeExpense'

type ContainerProps = Props
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  expenseItems: Item[]
  handleExpenseDeleteClick: ReturnType<typeof useIncomeExpense>['handleExpenseDeleteClick']
  handleIncomeDeleteClick: ReturnType<typeof useIncomeExpense>['handleIncomeDeleteClick']
  incomeItems: Item[]
}

const Component: React.FC<Props> = (props) => {
  return (
    <HStack alignItems={'flex-start'} gap={'10'} justifyContent={'center'}>
      <VStack>
        <HStack>
          <Text fontSize={'24px'} fontWeight={'bold'}>
            支出一覧
          </Text>
        </HStack>
        {props.expenseItems.length > 0 &&
          props.expenseItems.map((item) => (
            <HStack key={item.id}>
              <Text>{item.date.day}日</Text>
              <Text>{item.category}</Text>
              <Text>
                {item.amount.toLocaleString()}
                <Text as={'span'}>円</Text>
              </Text>
              <Box onClick={() => props.handleExpenseDeleteClick(item.id)}>
                <Button bg={'red.400'} color={'#fff'}>
                  削除
                </Button>
              </Box>
            </HStack>
          ))}
      </VStack>

      <VStack>
        <HStack>
          <Text fontSize={'24px'}>収入一覧</Text>
        </HStack>
        {props.incomeItems.length > 0 &&
          props.incomeItems.map((item) => (
            <HStack key={item.id}>
              <Text>{item.date.day}日</Text>
              <Text>{item.category}</Text>
              <Text>
                {item.amount.toLocaleString()}
                <Text as={'span'}>円</Text>
              </Text>
              <Box onClick={() => props.handleIncomeDeleteClick(item.id)}>
                <Button bg={'red.400'} color={'#fff'}>
                  削除
                </Button>
              </Box>
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
