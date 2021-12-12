import { Skeleton } from "@material-ui/lab";
import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";
export default function Table({transactions}) {
  return (
    <div className="flex-col hidden sm:flex">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 overflow-none">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Transaction Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                  Transaction Date
                  </th>
                  <th
                    scope="col"
                    colSpan={4}
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Transaction Detail
                  </th>
                </tr>
              </thead>
              <tbody
                className="bg-white divide-y divide-gray-200"
                id="TransactionData"
              >
                { transactions?.length ? transactions?.map((transaction) => (
                    <tr className="cursor-pointer bg-gray-50 hover:bg-gray-200 searchBody">
                      <td className="hidden px-6 py-4 cursor-pointer sm:inline whitespace-nowrap">
                        <div className="flex items-center">
                              {
                              transaction.transaction_type==="debit" ? 
                          <div className="flex flex-col items-center justify-center flex-shrink-0 w-10 h-10 ml-3 text-white bg-red-700 rounded-full">
                              DR
                          </div>
                               :
                          <div className="flex flex-col items-center justify-center flex-shrink-0 w-10 h-10 ml-3 text-white bg-green-700 rounded-full">
                              CR
                          </div>
                              }
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {transaction.transaction_name}
                            </div>
                            <div className="text-sm text-gray-500">
                              #{transaction.transaction_amount}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {moment(transaction?.created).format("LL")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" colSpan={4}>
                        <div className="text-sm text-gray-900">
                          {transaction.transaction_detail}
                        </div>
                      </td>
                    </tr>
                ))
                : !transactions?.length && (
                    <tr className="cursor-pointer bg-gray-50 hover:bg-gray-200 searchBody">
                      <td className="hidden px-6 py-4 cursor-pointer sm:inline whitespace-nowrap">
                        <div className="flex items-center">
                              <Skeleton variant="circle" height={50} width={50} animation="pulse" />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <Skeleton variant="text" width={300} animation="pulse" />
                              {/* {transaction.transaction_name} */}
                            </div>
                            <div className="text-sm text-gray-500">
                              <Skeleton variant="text" width={300} animation="pulse" />
                              {/* #{transaction.transaction_amount} */}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                        <Skeleton variant="text" width={300} animation="pulse" />
                          {/* {moment(transaction?.created).format("LL")} */}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" colSpan={4}>
                        <div className="text-sm text-gray-900">
                        <Skeleton variant="text" width={700} animation="pulse" />
                        <Skeleton variant="text" width={700} animation="pulse" />
                        <Skeleton variant="text" width={700} animation="pulse" />
                          {/* {transaction.transaction_detail} */}
                        </div>
                      </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
