import { Box, ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'

import { Header } from './components/Header'
import { IncomeExpenseForm } from './components/IncomeExpenseForm'
import { IncomeExpenseList } from './components/IncomeExpenseList'
import { IncomeExpensePieChart } from './components/IncomeExpensePieChart'
import { MonthlyBalance } from './components/MonthlyBalance'
import { ContentContainer } from './layouts/ContentContainer'
import { IncomeExpense } from './pages/IncomeExpense'

const App: React.FC = () => {
  return (
    <StrictMode>
      <ChakraProvider>
        <IncomeExpense />
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
