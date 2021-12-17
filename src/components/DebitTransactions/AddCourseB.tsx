// import { Dialog, DialogTitle, DialogContent, TextareaAutosize } from '@material-ui/core'
import React from "react";
import { SingleAutoComplete } from "utils/AutoComplete";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { TextareaAutosize } from "@material-ui/core";
export default function FormDialog({
  handleSubmit,
  handleChange,
  open,
  setOpen,
  courses,
  value,
  setValue,
  handleSelect
}) {
  // const [open, setOpen] = React.useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const data = courses?.map((course) => {
    return {
      label: course?.courseName,
      value: course?.courseName,
    };
  });
  return (
    <>
      <button
        onClick={handleClickOpen}
        type="button"
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Add Transaction
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden"
          open={open}
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="flex flex-col w-full h-full overflow-y-scroll bg-white shadow-xl">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-3xl font-medium text-gray-900">
                          Make Transaction
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-screen">
                      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full mb-3">
                        <h1 className="text-3xl font-medium text-gray-900">Transaction Form</h1>
                          {[
                              {
                              name: "transaction_name",    
                              type: "text",    
                              label: "Transaction Name",    
                              placeholder: "Enter Transaction Name",    
                              },
                              {
                              name: "transaction_amount",    
                              type: "number",    
                              label: "Transaction Amount",    
                              placeholder: "Enter Transaction Amount",    
                              }
                          ].map((field, index)=> (
                        <div className="w-full px-3 my-2">
                          <label htmlFor={field.name} className="pb-3">
                            {field.label}
                          </label>
                          <input required name={field.name} onChange={handleChange} type={field.type} placeholder={field.placeholder} id={field.name} className="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-green-500 focus:z-10 sm:text-sm" />
                        </div>
                          ))
                          }
                        <div className="w-full px-3 my-2">
                          <label htmlFor="" className="pb-3">
                            Transaction Type
                          </label>
                          <select required name="transaction_type" onChange={handleSelect} id="transaction_type" className="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-green-500 focus:z-10 sm:text-sm" disabled>
                              <option value="">Please Select Transaction Type</option>
                              <option value="debit" className="text-red-700" selected>Debit</option>
                              <option value="credit" className="text-green-700" >Credit</option>
                          </select>
                        </div>
                        <div className="w-full px-3 my-2">
                          <label htmlFor="" className="pb-3">
                            Transaction Details
                          </label>
                          <TextareaAutosize minRows={3} name="transaction_detail" onChange={handleChange} id="transaction_detail" className="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-green-500 focus:z-10 sm:text-sm"/>
                        </div>
                        <div className="flex flex-row-reverse w-full px-3">
                          <button
                            type="submit"
                            className="relative flex justify-center px-6 py-2 mt-5 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md cursor-pointer group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                          >
                            Add Transaction
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
