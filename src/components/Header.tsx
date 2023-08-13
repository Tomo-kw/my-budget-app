import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/react'

type ContainerProps = Props

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Component = () => {
  return (
    <Stack>
      <Flex justify={'start'}>
        <Text as={'h1'} fontSize={'44px'}>
          MyBudgetApp
        </Text>
      </Flex>
      {/* <Box> */}
      <HStack fontSize={'30px'} justifyContent={'center'}>
        <Text as={'span'} cursor={'pointer'} onClick={() => alert('前月')}>
          ◀︎
        </Text>
        <Text mx={'0.5em'}>2023年07月</Text>
        <Text as={'span'} cursor={'pointer'} onClick={() => alert('次月')}>
          ▶︎
        </Text>
      </HStack>
      {/* </Box> */}
    </Stack>
  )
}

const Container = () => {
  return <Component />
}

export const Header = Container
