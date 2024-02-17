import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { useContext } from 'react'

import { AuthContext } from '../auth/AuthProvider'
import { useSignOut } from '../hooks/useSignOut'
// type ContainerProps = {}

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
      <Text color={'pink.400'} fontSize={'44px'}>
        MyBudgetApp
      </Text>
      <Box fontSize={'20px'} color={'gray.500'}>
        <Text>ログインユーザー</Text>
        <Text>{props.user?.email}</Text>
      </Box>
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

const Container: React.FC = (props) => {
  const { handleSubmit } = useSignOut()
  const { user } = useContext(AuthContext)

  return <Component {...props} handleSubmit={handleSubmit} user={user} />
}

export const Header = Container
