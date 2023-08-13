import { Box, HStack, Text, VStack } from '@chakra-ui/react'

type ContainerProps = Props
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Component = () => {
  return (
    <HStack justifyContent={'center'}>
      <VStack>
        <Text as={'h3'}>支出一覧</Text>
        <Box>円グラフ</Box>
      </VStack>
      <VStack>
        <Text as={'h3'}>収入一覧</Text>
        <Box>円グラフ</Box>
      </VStack>
    </HStack>
  )
}

const Container = () => {
  return <Component />
}

export const IncomeExpensePieChart = Container
