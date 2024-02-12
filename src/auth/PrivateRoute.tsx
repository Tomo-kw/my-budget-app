import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { IncomeExpense } from '../pages/IncomeExpense'
import { AuthContext } from './AuthProvider'

const PrivateRoute = () => {
  const { user } = useContext(AuthContext)

  console.log('PrivateRoute', user)

  return user ? <IncomeExpense /> : <Navigate to={'/signin'} />
}

export default PrivateRoute
