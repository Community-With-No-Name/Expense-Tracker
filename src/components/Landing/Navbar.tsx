/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import { ChevronDownIcon } from '@heroicons/react/solid'

const navigations = [
  {name: "Login", url: "/login"},
  {name: "Register", url: "/register"},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative inset-0 text-black">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">MET</span>
                {/* <img
                  className="w-full h-16 sm:h-16"
                  src="/img/logo.png"
                  alt=""
                /> */}
                <Link to="/">
                <h1 className="text-2xl font-extrabold text-black cursor-pointer">MET</h1>
                </Link>
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-black bg-green-900 rounded-md hover:text-gray-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              {
                navigations.map((nav, index)=>(
                  <Link key={index} to={nav.url}>
              <div className="text-base font-medium text-black cursor-pointer hover:text-gray-900">
                {nav.name}
              </div>
                  </Link>
                ))
              }
            </nav>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-40 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-green-900 divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      {/* <img
                        className="w-auto h-16"
                        src="/img/logo.png"
                        alt="Workflow"
                      /> */}
                      <Link to="/">
                <h1 className="text-2xl font-extrabold text-black cursor-pointer">MET</h1>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-black bg-green-900 rounded-md hover:text-gray-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="grid grid-cols-1 gap-4">
                    {
                      navigations.map((nav, index)=>(
                    <Link to={nav.url} key={index}>
                      <div className="text-base font-medium text-black cursor-pointer hover:text-gray-700 sspro">
                      {nav.name}
                      </div>
                    </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
