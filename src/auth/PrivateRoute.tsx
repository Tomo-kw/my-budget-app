import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { IncomeExpense } from '../pages/IncomeExpense'
import { AuthContext } from './AuthProvider'

const PrivateRoute = () => {
  const { isAuthChecked, loginUser } = useContext(AuthContext)

  return (
    <>
      {isAuthChecked ? (
        loginUser ? (
          <IncomeExpense />
        ) : (
          <Navigate to={'/signin'} />
        )
      ) : // ログイン状態のチェックがまだ完了していない場合、何も表示しない
      null}
    </>
  )
}

export default PrivateRoute
