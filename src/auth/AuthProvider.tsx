import { onAuthStateChanged, type User } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import { auth } from '../firebase'

export type GlobalAuthLoginState = {
  user: User | null
}

const initialLoginState: GlobalAuthLoginState = {
  user: null,
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<GlobalAuthLoginState>(initialLoginState)

// 認証状態をグローバルに管理するProvider
const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<GlobalAuthLoginState>(initialLoginState)

  // 初回アクセス時に認証済みかをチェック
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('userAuthProviders', user)
        setUser({ user })
      } else {
        setUser({ user: null })
        console.log('no user')
      }
    })
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
