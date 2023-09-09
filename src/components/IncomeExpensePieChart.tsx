import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import { Cell, Pie, PieChart } from 'recharts'

type ContainerProps = Props
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// TODO:valueに各項目の値を渡す・データは固定 props名で判定
const Component = () => {
  // 表示させたいデータ群
  const data = [
    {
      index: 0,
      name: 'データ1',
      value: 300,
    },
    {
      index: 1,
      name: 'データ2',
      value: 200,
    },
    {
      index: 2,
      name: 'データ3',
      value: 380,
    },
    {
      index: 3,
      name: 'データ4',
      value: 80,
    },
  ]

  // 円グラフの各領域の色を定義
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  const renderLabel = ({ name }: any) => {
    return name
  }

  return (
    <HStack justifyContent={'center'}>
      {/* 支出エリア */}
      <VStack>
        <Text as={'h3'}>支出一覧</Text>
        <Box>円グラフ</Box>
        <PieChart height={250} width={400}>
          <Pie
            cx={'50%'}
            cy={'50%'}
            data={data}
            dataKey="value"
            fill="#82ca9d"
            label={renderLabel}
            outerRadius={100}
            // labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </VStack>
      {/* 収入エリア */}
      <VStack>
        <Text as={'h3'}>収入一覧</Text>
        <Box>円グラフ</Box>
        <PieChart height={250} width={400}>
          <Pie cx={'50%'} cy={'50%'} data={data} dataKey="value" fill="#82ca9d" outerRadius={100} />
        </PieChart>
      </VStack>
    </HStack>
  )
}

const Container = () => {
  return <Component />
}

export const IncomeExpensePieChart = Container
