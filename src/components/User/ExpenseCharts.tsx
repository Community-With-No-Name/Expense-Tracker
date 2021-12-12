import React from 'react'
import PieChart from './PieChart'

export default function ExpenseCharts({data}) {
    return (
        <>
           <div className="pt-5" />
    <h1 className="text-2xl font-semibold text-gray-900">Expense Charts</h1>
      <PieChart debt={data.debit} credit={data.credit} />
        </>
    )
}
