import { Box, Button, Input, Link, Text, VStack } from '@chakra-ui/react'

import { useSignIn } from '../../hooks/useSignIn'
import { useSignUp } from '../../hooks/useSignUp'

// ______________________________________________________
//
type ContainerProps = Props

type UseSignIn = ReturnType<typeof useSignIn>
type UseSignUp = ReturnType<typeof useSignUp>

type Props = {
  currentColor: string
  currentLabel: string
  email: string
  handleEmailChange: UseSignIn['handleEmailChange'] | UseSignUp['handleEmailChange']
  handlePasswordChange: UseSignIn['handlePasswordChange'] | UseSignUp['handlePasswordChange']
  handleSubmit: UseSignIn['handleSubmit'] | UseSignUp['handleSubmit']
  password: string
  toggleColor: string
  toggleLabel: string
  url: string
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Box
      color={'#7d7d7d'}
      m={'0 auto'}
      maxW={'500px'}
      mb={'2rem'}
      mt={{ base: '1rem', lg: '3rem' }}
      textAlign={'center'}
    >
      <Text
        color={props.currentColor}
        fontSize={{ base: '40px', lg: '100px' }}
        fontWeight={'bold'}
        mb={6}
      >
        {props.currentLabel}
      </Text>
      <VStack>
        <VStack gap={'1rem'}>
          <Box>
            <Text fontSize={'24px'} textAlign={'left'}>
              Email
            </Text>
            <Input
              color={'#000'}
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
            <Input
              color={'#000'}
              onChange={props.handlePasswordChange}
              type="password"
              value={props.password}
            />
          </Box>
        </VStack>
        <Button bg={props.currentColor} color={'#fff'} mt={'2rem'} type="submit" width={'150px'}>
          {props.currentLabel}
        </Button>
        <Button bg={props.toggleColor} color={'#fff'} mt={'2rem'} width={'150px'}>
          <Link href={props.url}>{props.toggleLabel}</Link>
        </Button>
      </VStack>
    </Box>
  </form>
)
// ______________________________________________________
//
const Container: React.FC<ContainerProps> = (props) => {
  return <Component {...props} />
}
// ______________________________________________________
//
export const SignItem = Container
