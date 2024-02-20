import { Button, HStack, Input, Select, Text, VStack } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

import { DisplayType, useIncomeExpense } from '../hooks/useIncomeExpense'

type ContainerProps = Props

type Props = {
  category: string
  currentDisplayType: DisplayType
  handleSubmitClick: ReturnType<typeof useIncomeExpense>['handleSubmitClick']
  setAmount: Dispatch<SetStateAction<number>>
  setCategory: Dispatch<SetStateAction<string>>
  setCurrentDisplayType: Dispatch<SetStateAction<DisplayType>>
  setType: Dispatch<SetStateAction<string>>
}

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
            {/* TODO:配列にまとめる */}
            <option value="食費">食費</option>
            <option value="日用品">日用品</option>
            <option value="交通費">交通費</option>
            <option value="衣類">衣類</option>
            <option value="交際費">交際費</option>
            <option value="趣味">趣味</option>
            <option value="貯金">貯金</option>
            <option value="その他">その他</option>
          </Select>
        )}
        {/* 収入 */}
        {props.currentDisplayType === 'income' && (
          <Select onChange={(e) => props.setCategory(e.target.value)} value={props.category}>
            <option value="給料">給料</option>
            <option value="その他">その他</option>
          </Select>
        )}
      </VStack>
      <VStack>
        <Text>金額</Text>
        <Input onChange={(e) => props.setAmount(Number(e.target.value))} type="number" />
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
