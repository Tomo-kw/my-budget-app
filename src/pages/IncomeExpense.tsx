// ______________________________________________________

import { Header } from '../components/Header'
import { IncomeExpenseForm } from '../components/IncomeExpenseForm'
import { IncomeExpenseList } from '../components/IncomeExpenseList'
import { IncomeExpensePieChart } from '../components/IncomeExpensePieChart'
import { MonthlyBalance } from '../components/MonthlyBalance'
import { DisplayType, useIncomeExpense } from '../hooks/useIncomeExpense'
import { ContentContainer } from '../layouts/ContentContainer'

type ContainerProps = {
  //   currentDisplayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
}

type Props = {
  currentDisplayType: ReturnType<typeof useIncomeExpense>['currentDisplayType']
}
const Component = (props: Props) => (
  <ContentContainer>
    <Header />
    <MonthlyBalance />
    <IncomeExpenseForm currentDisplayType={props.currentDisplayType} />
    <IncomeExpensePieChart />
    <IncomeExpenseList />
  </ContentContainer>
)
// ______________________________________________________
//

const Container: React.FC<ContainerProps> = () => {
  const { currentDisplayType } = useIncomeExpense()
  return <Component currentDisplayType={currentDisplayType} />
}
// ______________________________________________________
//
export const IncomeExpense = Container
