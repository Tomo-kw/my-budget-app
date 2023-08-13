import { Box, Button, HStack, Input, Select, Text, VStack } from '@chakra-ui/react'

import { DisplayType } from '../hooks/useIncomeExpense'

type ContainerProps = Props

type Props = {
  currentDisplayType: DisplayType
}

const Component = (props: Props) => {
  console.log(props.currentDisplayType)
  return (
    <HStack m={'0 auto'}>
      <VStack>
        <Text>収支</Text>
        <Select>
          <option value={'expence'}>支出</option>
          <option value={'income'}>収入</option>
        </Select>
      </VStack>
      <VStack>
        <Text>カテゴリ</Text>
        {/* TODO:選択した収支によって表示カテゴリを切り替える */}
        {/* 支出 */}
        {props.currentDisplayType === 'expense' && (
          <Select>
            <option value="option1">食費</option>
            <option value="option2">日用品</option>
            <option value="option3">交通費</option>
            <option value="option4">衣類</option>
            <option value="option5">交際費</option>
            <option value="option6">趣味</option>
            <option value="option7">貯金</option>
            <option value="option8">その他</option>
          </Select>
        )}
        {/* 収入 */}
        {/* <Select placeholder="Select option"> */}
        {props.currentDisplayType === 'income' && (
          <Select>
            <option value="option1">給料</option>
            <option value="option2">その他</option>
          </Select>
        )}
        {/* 選択した収支によって表示するカテゴリを変える */}
      </VStack>
      <VStack>
        <Text>金額</Text>
        <Input />
      </VStack>
      <Button>登録</Button>
    </HStack>
  )
}

const Container = (props: ContainerProps) => {
  return <Component {...props} />
}

export const IncomeExpenseForm = Container
