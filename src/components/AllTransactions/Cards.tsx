import { Skeleton } from "@material-ui/lab";
import moment from "moment";
import React from "react";

export default function Cards({transactions}) {
  
  return (
    <>
      <div className="pt-5" />
      
      <div className="grid grid-cols-1 pt-5 -m-2 lg:grid-cols-2 xl:grid-cols-3" id="TransactionData">
        {transactions?.length ? transactions?.map((transaction: any) => (
          <div
            className="w-full p-2 lg:w-1/2sm:w-full searchBody"
            key={transaction._id}
          >
            <div className={`flex items-center h-full p-4 text-gray-500 transform bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 ${transaction.transaction_type==="credit" ? "hover:bg-green-400" : "hover:bg-red-400"} hover:text-white`}>
              <>
              {
                transaction.transaction_type==="credit" &&
                <div
                className={`text-white flex-shrink-0 rounded-full mr-4 bg-green-700 p-4`}
                >CR</div>
              }
              {
                transaction.transaction_type==="debit" &&
                <div
                className={`text-white flex-shrink-0 rounded-full mr-4 bg-red-700 p-4`}
                >DR</div>
              }
                <div className="flex-grow">
                  <h2 className="font-extrabold title-font">
                    {transaction?.transaction_name}
                  </h2>
                  {[
                    {
                      title: "date",
                      value: transaction.transaction_date,
                    },
                    {
                      title: "Amount",
                      value: `#${transaction.transaction_amount}`,
                    },
                    {
                      title: "Details",
                      value: transaction.transaction_detail,
                    },
                  ].map((detail, i) => (
                    <div className="flex flex-wrap justify-between w-full" key={i}>
                      <p className="py-1 text-sm font-medium font-dosis">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        ))
        :
          <div
            className="w-full p-2 lg:w-1/2sm:w-full searchBody"
          >
            <div className={`flex items-center h-full p-4 text-gray-500 transform bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 hover:text-white`}>
              <>
              <div
              className={`text-white flex-shrink-0 rounded-full mr-4`}
              >
              <Skeleton variant="circle" height={50} width={50} animation="pulse" />
              </div>
              {/* {
                transaction.transaction_type==="credit" &&
              }
              {
                transaction.transaction_type==="debit" &&
                <div
                className={`text-white flex-shrink-0 rounded-full mr-4 bg-red-700 p-4`}
                >DR</div>
              } */}
                <div className="flex-grow">
                  <h2 className="font-extrabold title-font">
                    {/* {transaction?.transaction_name} */}
                  </h2>
                    <div className="flex flex-wrap justify-between w-full">
                      <p className="py-1 text-sm font-medium font-dosis">
                        {/* {detail.value} */}
                        <Skeleton variant="text" height={50} width={250} animation="pulse" />
                      </p>
                      <p className="py-1 text-sm font-medium font-dosis">
                        {/* {detail.value} */}
                        <Skeleton variant="text" width={250} animation="pulse" />
                      </p>
                      <p className="py-1 text-sm font-medium font-dosis">
                        {/* {detail.value} */}
                        <Skeleton variant="text" width={250} animation="pulse" />
                        <Skeleton variant="text" width={250} animation="pulse" />
                        <Skeleton variant="text" width={250} animation="pulse" />
                      </p>
                    </div>
                </div>
              </>
            </div>
          </div>
        }
      </div>
    </>
  );
}
