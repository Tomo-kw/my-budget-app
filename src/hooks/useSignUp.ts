import { useToast } from '@chakra-ui/react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { auth } from '../firebase'

export const useSignUp = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const toast = useToast()

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
        toast({
          duration: 9000,
          isClosable: true,
          position: 'top',
          status: 'success',
          title: '登録しました',
        })
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        toast({
          duration: 9000,
          isClosable: true,
          position: 'top',
          status: 'error',
          title: '登録できませんでした。再度内容を変更し「SIGN UP」してください',
        })
      })
  }
  return { email, handleEmailChange, handlePasswordChange, handleSubmit, password }
}
