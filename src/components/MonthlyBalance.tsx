import { Box, Stack, Text } from '@chakra-ui/react'

type ContainerProps = Props
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Component = () => {
  return (
    <Stack>
      <Text borderBottom={'1px solid #000'} fontSize={'40px'} paddingBottom={'3px'}>
        8,000<Text as={'span'}>円</Text>
      </Text>
    </Stack>
  )
}

const Container = () => {
  return <Component />
}

export const MonthlyBalance = Container
