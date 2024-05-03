import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Cell, Pie, PieChart } from 'recharts'

import { Item } from '../hooks/useIncomeExpense'
import { colors } from './consts/budget'
// ______________________________________________________
//
type ContainerProps = Omit<
  Props,
  'expenseItemsCount' | 'incomeItemsCount' | 'incomeData' | 'expenseData' | 'renderCustomizedLabel'
>

type Props = {
  expenseData: { index: number; name: string; value: number }[]
  expenseItems: Item[]
  expenseItemsCount: { [key: string]: number }
  incomeData: { index: number; name: string; value: number }[]
  incomeItems: Item[]
  incomeItemsCount: { [key: string]: number }
  renderCustomizedLabel: (props: {
    cx: number
    cy: number
    innerRadius: number
    midAngle: number
    name: string
    outerRadius: number
    percent: number
  }) => React.ReactNode
}
// ______________________________________________________
//
const Component: React.FC<Props> = (props) => (
  <HStack flexDirection={{ base: 'column', md: 'row' }} justifyContent={'center'}>
    {/* 支出エリア */}
    {props.expenseItems.length > 0 && (
      <VStack>
        <Text as={'h3'} fontSize={'24px'} fontWeight={'bold'}>
          支出割合
        </Text>
        <PieChart height={300} width={400}>
          <Pie
            cx={'50%'}
            cy={'50%'}
            data={props.expenseData}
            dataKey="value"
            fill="#82ca9d"
            label={props.renderCustomizedLabel}
            labelLine={false}
            outerRadius={150}
          >
            {props.expenseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </VStack>
    )}
    {/* 収入エリア */}
    {props.incomeItems.length > 0 && (
      <VStack>
        <Text as={'h3'} fontSize={'24px'} fontWeight={'bold'}>
          収入割合
        </Text>
        <PieChart height={300} width={400}>
          <Pie
            cx={'50%'}
            cy={'50%'}
            data={props.incomeData}
            dataKey="value"
            fill="#82ca9d"
            label={props.renderCustomizedLabel}
            labelLine={false}
            outerRadius={150}
          >
            {props.incomeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </VStack>
    )}
  </HStack>
)
// ______________________________________________________
//
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

  const expenseData = Object.entries(expenseCategoryTotal).map((item, index) => {
    return {
      index: index,
      name: item[0],
      value: item[1],
    }
  })

  const incomeData = Object.entries(incomeCategoryTotal).map((item, index) => {
    return {
      index: index,
      name: item[0],
      value: item[1],
    }
  })
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    innerRadius,
    midAngle,
    name,
    outerRadius,
    percent,
  }: {
    cx: number
    cy: number
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
    <Component
      {...props}
      expenseData={expenseData}
      expenseItemsCount={expenseCategoryTotal}
      incomeData={incomeData}
      incomeItemsCount={incomeCategoryTotal}
      renderCustomizedLabel={renderCustomizedLabel}
    />
  )
}
// ______________________________________________________
//
export const IncomeExpensePieChart = Container
