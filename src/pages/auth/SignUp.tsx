import { Box, Button, Input, Link, Text, VStack } from '@chakra-ui/react'

import { useSignUp } from '../../hooks/useSignUp'
// ______________________________________________________
//

type Props = {
  email: ReturnType<typeof useSignUp>['email']
  handleEmailChange: ReturnType<typeof useSignUp>['handleEmailChange']
  handlePasswordChange: ReturnType<typeof useSignUp>['handlePasswordChange']
  handleSubmit: ReturnType<typeof useSignUp>['handleSubmit']
  password: ReturnType<typeof useSignUp>['password']
}
// ______________________________________________________
//
const Component = (props: Props) => (
  <form onSubmit={props.handleSubmit}>
    <Box color={'#7d7d7d'} m={'0 auto'} maxW={'500px'} mb={'2rem'} mt={'3rem'} textAlign={'center'}>
      <Text color={'red.500'} fontSize={'100px'}>
        SIGN UP
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
        <Button bg={'red.500'} color={'#fff'} mt={'2rem'} type="submit">
          SIGN UP
        </Button>
        <Button bg={'green.500'} color={'#fff'} mt={'2rem'}>
          <Link href="/signin">SIGN IN</Link>
        </Button>
      </VStack>
    </Box>
  </form>
)
// ______________________________________________________
//

const Container: React.FC = () => {
  const { email, handleEmailChange, handlePasswordChange, handleSubmit, password } = useSignUp()

  return (
    <Component
      email={email}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      password={password}
    />
  )
}
// ______________________________________________________
//
export const SignUp = Container
