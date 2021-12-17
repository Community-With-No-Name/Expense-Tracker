import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'

export default function ExpenseCharts({data}) {
    return (
        <>
           <div className="pt-5" />
    <h1 className="text-2xl font-semibold text-gray-900 ">Expense Charts</h1>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-2">
      <BarChart debit={data.monthDebit} credit={data.monthCredit} />
      <LineChart debit={data.monthDebit} credit={data.monthCredit} />
    </div>
    <div className="flex justify-center w-full py-5">
      <PieChart debt={data.debit} credit={data.credit} />
    </div>
        </>
    )
}
