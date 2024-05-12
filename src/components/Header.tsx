import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import React, { useContext } from 'react'

import { AuthContext } from '../auth/AuthProvider'
import { useSignOut } from '../hooks/useSignOut'
// ______________________________________________________
//
type Props = {
  handleSubmit: ReturnType<typeof useSignOut>['handleSubmit']
  loginUser: User | null
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <Heading
    alignItems={'center'}
    display={'flex'}
    flexDirection={{ base: 'column', md: 'row' }}
    gap={'1rem'}
    justifyContent={'space-between'}
    m={'0 auto'}
    maxW={'1000px'}
    p={7}
  >
    <Text color={'pink.400'} fontSize={'50px'}>
      MyBudgetApp
    </Text>
    <HStack color={'gray.500'} spacing={8}>
      <VStack>
        <Text color={'#000'} fontSize={{ base: '16px', lg: '20px' }}>
          ログインユーザー
        </Text>
        <Text fontSize={'18px'}>{props.loginUser?.email}</Text>
      </VStack>
      {props.loginUser ? (
        <Button bg={'orange.400'} color={'#7d7d7d'} onClick={props.handleSubmit}>
          SIGN OUT
        </Button>
      ) : (
        <Text color={'#7d7d7d'} fontSize={{ base: '16px', lg: '20px' }}>
          ログアウト中
        </Text>
      )}
    </HStack>
  </Heading>
)
// ______________________________________________________
//
const Container: React.FC = (props) => {
  const { handleSubmit } = useSignOut()
  const { loginUser } = useContext(AuthContext)

  return <Component {...props} handleSubmit={handleSubmit} loginUser={loginUser} />
}
// ______________________________________________________
//
export const Header = Container
