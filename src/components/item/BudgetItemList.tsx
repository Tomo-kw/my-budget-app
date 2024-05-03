import { Button, HStack, Text } from '@chakra-ui/react'

import { Item, useIncomeExpense } from '../../hooks/useIncomeExpense'
// ______________________________________________________
//
type ContainerProps = Props
type Props = {
  budgetItems: Item[]
  handleBudgetDeleteClick: ReturnType<typeof useIncomeExpense>['handleExpenseDeleteClick']
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <>
    {props.budgetItems.map((item) => (
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
          onClick={() => props.handleBudgetDeleteClick(item.id)}
        >
          削除
        </Button>
      </HStack>
    ))}
  </>
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const BudgetItemList = Container
