import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { useContext } from 'react'

import { AuthContext } from '../../auth/AuthProvider'
import { useSignIn } from '../../hooks/useSignIn'
// ______________________________________________________
//
type ContainerProps = Props

type Props = {
  email: ReturnType<typeof useSignIn>['email']
  handleEmailChange: ReturnType<typeof useSignIn>['handleEmailChange']
  handlePasswordChange: ReturnType<typeof useSignIn>['handlePasswordChange']
  handleSubmit: ReturnType<typeof useSignIn>['handleSubmit']
  isLoading: ReturnType<typeof useSignIn>['isLoading']
  password: ReturnType<typeof useSignIn>['password']
  user: User | null
}
// ______________________________________________________
//
const Component = (props: Props) => (
  <form onSubmit={props.handleSubmit}>
    <Box color={'#7d7d7d'} m={'0 auto'} maxW={'500px'} mb={'2rem'} mt={'3rem'} textAlign={'center'}>
      <Text as="h1" fontSize={'100px'}>
        SIGN IN
      </Text>
      <VStack>
        <VStack gap={'1rem'}>
          <Box>
            <Text fontSize={'24px'} textAlign={'left'}>
              Email
            </Text>
            <Input
              onChange={props.handleEmailChange}
              placeholder="aaabbb@example.com"
              type="email"
              value={props.email}
            />
          </Box>
          <Box>
            <Text fontSize={'24px'} textAlign={'left'}>
              Password
            </Text>
            <Input onChange={props.handlePasswordChange} type="password" value={props.password} />
          </Box>
        </VStack>
        <Button
          bg={'green.500'}
          color={'#fff'}
          isLoading={props.isLoading}
          mt={'2rem'}
          type="submit"
        >
          SIGN IN
        </Button>
      </VStack>
    </Box>
  </form>
)
// ______________________________________________________
//

const Container: React.FC = () => {
  const { email, handleEmailChange, handlePasswordChange, handleSubmit, isLoading, password } =
    useSignIn()

  const { user } = useContext(AuthContext)

  return (
    <Component
      email={email}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      password={password}
      user={user}
    />
  )
}
// ______________________________________________________
//
export const SignIn = Container
