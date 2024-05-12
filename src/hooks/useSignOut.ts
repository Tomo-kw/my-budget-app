import { useToast } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'

import { auth } from '../firebase'

export const useSignOut = () => {
  const toast = useToast

  const handleSubmit = async () => {
    await signOut(auth)
      .then(() => {
        toast({
          duration: 9000,
          isClosable: true,
          position: 'top',
          status: 'success',
          title: 'ログアウトしました',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return { handleSubmit }
}
