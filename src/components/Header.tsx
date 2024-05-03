import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import React, { useContext } from 'react'

import { AuthContext } from '../auth/AuthProvider'
import { useSignOut } from '../hooks/useSignOut'

type Props = {
  handleSubmit: ReturnType<typeof useSignOut>['handleSubmit']
  loginUser: User | null
}

const Component: React.FC<Props> = (props) => {
  return (
    <Heading
      alignItems={'center'}
      display={'flex'}
      justifyContent={'space-between'}
      m={'0 auto'}
      maxW={'1000px'}
      p={'30px'}
    >
      <Text color={'pink.400'} fontSize={'44px'}>
        MyBudgetApp
      </Text>
      <Box color={'gray.500'} fontSize={'20px'}>
        <Text>ログインユーザー</Text>
        <Text>{props.loginUser?.email}</Text>
      </Box>
      {props.loginUser ? (
        <Button bg={'orange.400'} color={'#7d7d7d'} onClick={props.handleSubmit}>
          SIGN OUT
        </Button>
      ) : (
        <Text color={'#7d7d7d'}>ログアウト中</Text>
      )}
    </Heading>
  )
}

const Container: React.FC = (props) => {
  const { handleSubmit } = useSignOut()
  const { loginUser } = useContext(AuthContext)

  return <Component {...props} handleSubmit={handleSubmit} loginUser={loginUser} />
}

export const Header = Container
