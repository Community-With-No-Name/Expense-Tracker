import React from 'react'
import { CurrencyDollarIcon, CurrencyEuroIcon, CurrencyRupeeIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"

export default function Stats({data}) {
    const stats = [
        { href: `/school/students`,id: 1, name: 'Debits', stat: data.debit, icon: CurrencyRupeeIcon},
        { href: `/school/staffs`,id: 2, name: 'Credits', stat: data.credit, icon: CurrencyEuroIcon},
        { href: `/school/classes`,id: 3, name: 'Total', stat: data.total, icon: CurrencyDollarIcon},
      ]
    return (
        <>
    <div>
      <div className="pt-5" />
    <h1 className="text-2xl font-semibold text-gray-900">Your Stats</h1>

      <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative px-4 pt-5 pb-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className={`absolute p-3 bg-red-500 rounded-md`}>
                <CurrencyRupeeIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate font-dosis">Debits</p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 font-dosis">#{data.debit}</p>
            </dd>
          </div>
          <div
            className="relative px-4 pt-5 pb-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className={`absolute p-3 bg-green-500 rounded-md`}>
                <CurrencyEuroIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate font-dosis">Credits</p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 font-dosis">#{data.credit}</p>
            </dd>
          </div>
          <div
            className="relative px-4 pt-5 pb-5 overflow-hidden bg-white rounded-lg shadow sm:pt-6 sm:px-6"
          >
            <dt>
              <div className={`absolute p-3 bg-${data.total<0 ? "red" : "green"}-500 rounded-md`}>
                <CurrencyDollarIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate font-dosis">Total</p>
            </dt>
            <dd className="flex items-baseline pb-6 ml-16 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900 font-dosis">#{data.total}</p>
            </dd>
          </div>
      </dl>
    </div>
    </>
    )
}
