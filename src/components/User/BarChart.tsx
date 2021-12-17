import React from "react"
import {Doughnut,Line,Bar} from 'react-chartjs-2';

export default function BarChart({debit, credit}) {
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
      backgroundColor: '#dc2626',
      hoverBackgroundColor: '#bb1d1d',
    },
    {
      label: 'Credit',
      data: credit,
      backgroundColor: '#059669',
      hoverBackgroundColor: '#076548',
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
      backgroundColor: '#dc2626',
      hoverBackgroundColor: '#bb1d1d',
    },
    {
      label: 'Credit',
      data: credit,
      backgroundColor: '#059669',
      hoverBackgroundColor: '#076548',
    },
  ],
    })
  },[debit, credit, labels])
  return (
    <>
    <div
      className="w-auto h-auto col-span-1 p-5 px-4 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
    >
    <>
      <h2 className="text-xl font-medium leading-6 text-gray-900">Monthly Transaction Stats</h2>
      <Bar
        data={data}
        width={200}
        height={200}
        options={options}
      />
    </>
    </div>
    </>
  )
}
