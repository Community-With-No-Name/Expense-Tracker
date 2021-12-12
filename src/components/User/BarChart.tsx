import React from "react"
import {Doughnut,Line,Bar} from 'react-chartjs-2';

export default function PieChart({debit, credit}) {
  const [chart, setChart] = React.useState({
    labels: [
      `Debit: #${debit}`,
      `Credit: #${credit}`,
    ],
    datasets: [{
      data: [debit, credit],
      backgroundColor: [
      '#dc2626',
      '#059669',
      ],
      hoverBackgroundColor: [
      '#bb1d1d',
      '#076548',
      ]
    }]
  })
  React.useEffect(()=> {
    setChart({
      labels: [
        `Debit: #${debit}`,
        `Credit: #${credit}`,
      ],
      datasets: [{
        data: [debit, credit],
        backgroundColor: [
        '#dc2626',
        '#059669',
        ],
        hoverBackgroundColor: [
        '#bb1d1d',
        '#076548',
        ]
      }]
    })
  },[debit, credit])
  return (
    <>
    <div
      className="relative w-auto h-auto p-5 px-4 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
    >
    <>
      <h2 className="text-xl font-medium leading-6 text-gray-900">Transaction Stats</h2>
      <Doughnut
        // className="w-auto h-auto"
        data={chart}
        width={200}
        height={200}
      />
    </>
    </div>
    </>
  )
}
