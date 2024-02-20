import { onAuthStateChanged, type User } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import { auth } from '../firebase'

export type GlobalAuthLoginState = {
  isAuthChecked: boolean
  loginUser: User | null
}

const initialLoginState: GlobalAuthLoginState = {
  isAuthChecked: false,
  loginUser: null,
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<GlobalAuthLoginState>(initialLoginState)

// 認証状態をグローバルに管理するProvider
const AuthProvider = ({ children }: Props) => {
  const [loginUser, setLoginUser] = useState<User | null>(initialLoginState.loginUser)
  const [isAuthChecked, setIsAuthChecked] = useState<boolean>(false)

  // 初回アクセス時に認証済みかをチェック
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('userAuthProviders', user)
        setLoginUser(user)
      } else {
        setLoginUser(user)
        console.log('no user')
      }
      setIsAuthChecked(true)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthChecked, loginUser }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
