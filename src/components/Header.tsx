/* eslint-disable @typescript-eslint/ban-types */
import { Button, Heading, Text } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { useContext } from 'react'

import { AuthContext } from '../auth/AuthProvider'
import { useSignOut } from '../hooks/useSignOut'
type ContainerProps = {}

type Props = {
  handleSubmit: ReturnType<typeof useSignOut>['handleSubmit']
  user: User | null
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
      <Text as={'h1'} fontSize={'44px'}>
        MyBudgetApp
      </Text>
      {props.user ? (
        <Button bg={'orange.400'} color={'#7d7d7d'} onClick={props.handleSubmit}>
          SIGN OUT
        </Button>
      ) : (
        <Text color={'#7d7d7d'}>ログアウト中</Text>
      )}
    </Heading>
  )
}

const Container: React.FC<ContainerProps> = (props) => {
  const { handleSubmit } = useSignOut()
  const { user } = useContext(AuthContext)

  return <Component {...props} handleSubmit={handleSubmit} user={user} />
}

export const Header = Container
