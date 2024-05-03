import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

import { Item } from '../hooks/useIncomeExpense'

type ContainerProps = Omit<Props, 'expenseItemsCount' | 'incomeItemsCount'>

type Props = {
  expenseItems: Item[]
  expenseItemsCount: { [key: string]: number }
  incomeItems: Item[]
  incomeItemsCount: { [key: string]: number }
}

// TODO:valueに各項目の値を渡す・データは固定 props名で判定
const Component: React.FC<Props> = (props) => {
  // 表示させたいデータ群
  const expenseData = Object.entries(props.expenseItemsCount).map((item, index) => {
    return {
      index: index,
      name: item[0],
      value: item[1],
    }
  })

  const incomeData = Object.entries(props.incomeItemsCount).map((item, index) => {
    return {
      index: index,
      name: item[0],
      value: item[1],
    }
  })

  // 円グラフの各領域の色を定義
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
  // const renderLabel = ({ name }: any) => {
  //   return name
  // }

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    index,
    innerRadius,
    midAngle,
    name,
    outerRadius,
    percent,
  }: {
    cx: number
    cy: number
    index: number
    innerRadius: number
    midAngle: number
    name: string
    outerRadius: number
    percent: number
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text dominantBaseline="central" fill="white" textAnchor="middle" x={x} y={y}>
        {name}
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <HStack justifyContent={'center'}>
      {/* 支出エリア */}
      <VStack>
        <Text as={'h3'} fontSize={'24px'} fontWeight={'bold'}>
          支出
        </Text>
        <PieChart height={300} width={400}>
          <Pie
            cx={'50%'}
            cy={'50%'}
            data={expenseData}
            dataKey="value"
            fill="#82ca9d"
            label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={150}
          >
            {expenseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </VStack>
      {/* 収入エリア */}
      <VStack>
        <Text as={'h3'} fontSize={'24px'} fontWeight={'bold'}>
          収入
        </Text>
        <PieChart height={300} width={400}>
          <Pie
            cx={'50%'}
            cy={'50%'}
            data={incomeData}
            dataKey="value"
            fill="#82ca9d"
            label={renderCustomizedLabel}
            labelLine={false}
            outerRadius={150}
          >
            {incomeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </VStack>
    </HStack>
  )
}

const Container: React.FC<ContainerProps> = (props) => {
  const expenseCategoryTotal: { [key: string]: number } = {}
  const incomeCategoryTotal: { [key: string]: number } = {}

  /**
   * 支出のカテゴリごとの金額を集計
   */
  props.expenseItems.map((item) => {
    if (!expenseCategoryTotal[item.category]) {
      expenseCategoryTotal[item.category] = 0
    }

    expenseCategoryTotal[item.category] += item.amount
  })

  /**
   * 収入のカテゴリごとの金額を集計
   */
  props.incomeItems.map((item) => {
    if (!incomeCategoryTotal[item.category]) {
      incomeCategoryTotal[item.category] = 0
    }

    incomeCategoryTotal[item.category] += item.amount
  })

  return (
    <Component
      {...props}
      expenseItemsCount={expenseCategoryTotal}
      incomeItemsCount={incomeCategoryTotal}
    />
  )
}

export const IncomeExpensePieChart = Container
