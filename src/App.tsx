import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from './auth/AuthProvider'
import PrivateRoute from './auth/PrivateRoute'
import { Header } from './components/Header'
import { SignIn } from './pages/auth/SignIn'
import { SignUp } from './pages/auth/SignUp'

const App: React.FC = () => {
  return (
    <StrictMode>
      <ChakraProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route element={<PrivateRoute />} path="/" />
            <Route element={<SignIn />} path="/signin" />
            <Route element={<SignUp />} path="/signup" />
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </StrictMode>
  )
}

export default App
