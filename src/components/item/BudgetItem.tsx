import { Text, VStack } from '@chakra-ui/react'

import { Item, useIncomeExpense } from '../../hooks/useIncomeExpense'
import { BudgetItemList } from './BudgetItemList'
// ______________________________________________________
//
type ContainerProps = Props
type Props = {
  budgetItems: Item[]
  handleBudgetDeleteClick: ReturnType<typeof useIncomeExpense>[
    | 'handleExpenseDeleteClick'
    | 'handleIncomeDeleteClick']
  label: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <VStack>
    <Text fontSize={'24px'} fontWeight={'bold'}>
      {props.label}一覧
    </Text>
    {props.budgetItems.length > 0 ? (
      <BudgetItemList
        budgetItems={props.budgetItems}
        handleBudgetDeleteClick={props.handleBudgetDeleteClick}
      />
    ) : (
      <Text color={'green'} fontSize={'20px'} fontWeight={'bold'}>
        {props.label}はありません
      </Text>
    )}
  </VStack>
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const BudgetItem = Container
