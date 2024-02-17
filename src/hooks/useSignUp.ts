import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'

export const useSignUp = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('登録OK')
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        console.log('登録NG')
      })
  }
  return { email, handleEmailChange, handlePasswordChange, handleSubmit, password }
}
