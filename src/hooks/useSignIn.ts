import { useToast } from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'

export const useSignIn = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const toast = useToast()
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('ログインOK')

        toast({
          duration: 9000,
          isClosable: true,
          position: 'top',
          status: 'success',
          title: 'ログインしました',
        })
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        console.log('ログインNG')
        toast({
          description: errorMessage,
          duration: 9000,
          isClosable: true,
          position: 'top',
          status: 'error',
          title: 'ログインできませんでした',
        })
      })
  }
  return { email, handleEmailChange, handlePasswordChange, handleSubmit, password }
}
