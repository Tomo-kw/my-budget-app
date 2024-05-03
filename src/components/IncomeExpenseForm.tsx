import { Button, HStack, Input, Select, Text, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

import { DisplayType, useIncomeExpense } from '../hooks/useIncomeExpense'

type ContainerProps = Props

type Props = {
  amount: number
  category: string
  currentDisplayType: DisplayType
  handleSubmitClick: ReturnType<typeof useIncomeExpense>['handleSubmitClick']
  setAmount: Dispatch<SetStateAction<number>>
  setCategory: Dispatch<SetStateAction<string>>
  setCurrentDisplayType: Dispatch<SetStateAction<DisplayType>>
  setType: Dispatch<SetStateAction<string>>
}

const expenseList = ['食費', '日用品', '交通費', '衣類', '交際費', '趣味', '貯金', 'その他']
const incomeList = ['給料', 'その他']

const Component = (props: Props) => {
  return (
    <HStack m={'0 auto'}>
      <VStack>
        <Text>収支</Text>
        <Select
          onChange={(e) => props.setCurrentDisplayType(e.target.value as DisplayType)}
          value={props.currentDisplayType}
        >
          <option value={'expense'}>支出</option>
          <option value={'income'}>収入</option>
        </Select>
      </VStack>
      <VStack>
        <Text>カテゴリ</Text>
        {/* 支出 */}
        {props.currentDisplayType === 'expense' && (
          <Select onChange={(e) => props.setCategory(e.target.value)} value={props.category}>
            {expenseList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        )}
        {/* 収入 */}
        {props.currentDisplayType === 'income' && (
          <Select onChange={(e) => props.setCategory(e.target.value)} value={props.category}>
            {incomeList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        )}
      </VStack>
      <VStack>
        <Text>金額</Text>
        <Input
          onChange={(e) => props.setAmount(Number(e.target.value))}
          type="number"
          value={props.amount}
        />
      </VStack>
      <Button bg={'green.400'} color={'#fff'} onClick={props.handleSubmitClick} type="submit">
        登録
      </Button>
    </HStack>
  )
}

const Container = (props: ContainerProps) => {
  return <Component {...props} />
}

export const IncomeExpenseForm = Container
