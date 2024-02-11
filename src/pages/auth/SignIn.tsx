import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
// ______________________________________________________
//
// type ContainerProps = {}

// type Props = {}
// ______________________________________________________
//
const Component = () => (
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
          <Input placeholder="aaabbb@example.com" type="email" />
        </Box>
        <Box>
          <Text fontSize={'24px'} textAlign={'left'}>
            Password
          </Text>
          <Input type="password" />
        </Box>
      </VStack>
      <Button bg={'green.500'} color={'#fff'} mt={'2rem'}>
        SIGN IN
      </Button>
    </VStack>
  </Box>
)
// ______________________________________________________
//

const Container: React.FC = () => {
  return <Component />
}
// ______________________________________________________
//
export const SignIn = Container
