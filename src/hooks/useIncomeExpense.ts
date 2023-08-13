import { useState } from 'react'

export type DisplayType = 'expense' | 'income'

export const useIncomeExpense = () => {
  const [currentDisplayType, setCurrentDisplayType] = useState<DisplayType>('expense')
  return {
    currentDisplayType,
  }
}
