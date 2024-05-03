import { Button, Flex, HStack, Input, Select, Text, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

import { DisplayType, useIncomeExpense } from '../hooks/useIncomeExpense'
import { expenseList, incomeList } from './consts/budget'
// ______________________________________________________
//
type ContainerProps = Props

type Props = {
  amount: number
  category: string
  currentDisplayType: DisplayType
  handleSubmitClick: ReturnType<typeof useIncomeExpense>['handleSubmitClick']
  setAmount: Dispatch<SetStateAction<number>>
  setCategory: Dispatch<SetStateAction<string>>
  setCurrentDisplayType: Dispatch<SetStateAction<DisplayType>>
}
// ______________________________________________________
//

const Component = (props: Props) => (
  <HStack flexDirection={{ base: 'column', md: 'row' }} m={'0 auto'}>
    <Flex flexDirection={{ base: 'column', md: 'row' }} gap={'0.5rem'}>
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
          cursor={'pointer'}
          onChange={(e) => props.setAmount(Number(e.target.value))}
          type="number"
          value={props.amount === 0 ? '' : props.amount}
        />
      </VStack>
    </Flex>
    <Button bg={'green.400'} color={'#fff'} onClick={props.handleSubmitClick} type="submit">
      登録
    </Button>
  </HStack>
)
// ______________________________________________________
//
const Container = (props: ContainerProps) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const IncomeExpenseForm = Container
