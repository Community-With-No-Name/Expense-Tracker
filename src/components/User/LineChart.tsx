import React from "react"
import {Doughnut,Line,Bar} from 'react-chartjs-2';

export default function LineChart({debit, credit}) {
  const [labels, setLabels] = React.useState(['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", 'September', 'October', 'November', 'December']);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Transaction Chart',
      },
    },
  };
  const [data, setChart] = React.useState({
    labels,
  datasets: [
    {
      label: 'Debit',
      data: debit,
      borderColor: '#dc2626',
      backgroundColor: '#bb1d1d',
      // fill: true,
    },
    {
      label: 'Credit',
      data: credit,
      borderColor: '#059669',
      backgroundColor: '#076548',
      // fill: true,
    },
  ],
  })
  React.useEffect(()=> {
    setChart({
      labels,
  datasets: [
    {
      label: 'Debit',
      data: debit,
      borderColor: '#dc2626',
      backgroundColor: '#bb1d1d',
      // fill: true,
    },
    {
      label: 'Credit',
      data: credit,
      borderColor: '#059669',
      backgroundColor: '#076548',
      // fill: true,
    },
  ],
    })
  },[debit, credit, labels])
  return (
    <>
    <div className="w-auto h-auto col-span-1 p-5 px-4 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6">
    <>
      <h2 className="text-xl font-medium leading-6 text-gray-900">Transaction Stats</h2>
      <Line
        // className="w-auto h-auto"
        data={data}
        width={200}
        height={200}
      />
    </>
    </div>
    </>
  )
}
