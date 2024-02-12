import { Box, ChakraProvider } from '@chakra-ui/react'
import { onAuthStateChanged } from 'firebase/auth'
import { StrictMode, useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthContext, AuthProvider } from './auth/AuthProvider'
import PrivateRoute from './auth/PrivateRoute'
import { Header } from './components/Header'
import { IncomeExpenseForm } from './components/IncomeExpenseForm'
import { IncomeExpenseList } from './components/IncomeExpenseList'
import { IncomeExpensePieChart } from './components/IncomeExpensePieChart'
import { MonthlyBalance } from './components/MonthlyBalance'
import { auth } from './firebase'
import { ContentContainer } from './layouts/ContentContainer'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'
import { IncomeExpense } from './pages/IncomeExpense'

const App: React.FC = () => {
  return (
    <StrictMode>
      <ChakraProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<PrivateRoute />} path="/" />
            {/* // <PrivateRoute element={<IncomeExpense />} path="/" /> */}
            <Route element={<SignIn />} path="/signin" />
            <Route element={<SignUp />} path="/signup" />
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
