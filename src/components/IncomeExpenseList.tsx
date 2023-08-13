import { Box, HStack, Text, VStack } from '@chakra-ui/react'

type ContainerProps = Props
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Component = () => {
  return (
    <HStack alignItems={'flex-start'} gap={'10'} justifyContent={'center'}>
      <VStack>
        <HStack>
          <Text fontSize={'24px'}>支出一覧</Text>
          <Text>
            12,500<Text as={'span'}>円</Text>
          </Text>
        </HStack>
        <HStack>
          <Text>1日</Text>
          <Text>食費</Text>
          <Text>
            12,500<Text as={'span'}>円</Text>
          </Text>
        </HStack>
        <HStack>
          <Text>22日</Text>
          <Text>趣味</Text>
          <Text>
            3,500<Text as={'span'}>円</Text>
          </Text>
        </HStack>
      </VStack>
      <VStack>
        <HStack>
          <Text fontSize={'24px'}>収入一覧</Text>
          <Text>
            12,500<Text as={'span'}>円</Text>
          </Text>
        </HStack>
        <HStack>
          <Text>1日</Text>
          <Text>食費</Text>
          <Text>
            12,500<Text as={'span'}>円</Text>
          </Text>
        </HStack>
      </VStack>
    </HStack>
  )
}

const Container = () => {
  return <Component />
}

export const IncomeExpenseList = Container
