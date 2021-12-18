import React from "react"
import {Doughnut,Line,Bar} from 'react-chartjs-2';

export default function PieChart({debt, credit}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Transaction Doughnut Chart',
      },
    },
  };
  const [chart, setChart] = React.useState({
    labels: [
      `Debit: #${debt}`,
      `Credit: #${credit}`,
    ],
    datasets: [{
      data: [debt, credit],
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
        `Debit: #${debt}`,
        `Credit: #${credit}`,
      ],
      datasets: [{
        data: [debt, credit],
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
  },[debt, credit])
  return (
    <>
    <div
      className="w-full h-auto max-w-xl col-span-1 p-5 px-4 mx-auto overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
    >
    <>
      <h2 className="text-xl font-medium leading-6 text-gray-900">Transaction Stats</h2>
      <Doughnut
        data={chart}
        width={200}
        height={200}
        options={options}
      />
    </>
    </div>
    </>
  )
}
