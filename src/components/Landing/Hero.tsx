import React from 'react'
import image from "../../images/system.svg"
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
        <div className="py-12 bg-gray-100 md:py-24">
  <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
    <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
      <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">My Expense Tracker</h1>
      <p className="mb-6 text-lg text-gray-600 xl:text-xl lg:mb-8 xl:mb-10">Track your daily and monthly expenses from location in the world on your mobile phone or PC.</p>
      <div className="flex mb-6 space-x-4">
        <Link to="/login">
        <button className="inline-block px-5 py-2 font-semibold text-green-700 border border-green-700 rounded-lg hover:text-green-50 focus:outline-none bg-gradient-to-br from-green-50 to-green-100 hover:from-green-500 hover:to-green-700 ">Sign in</button>
        </Link>
        <Link to="/register">
        <button className="inline-block px-5 py-2 font-semibold rounded-lg text-green-50 hover:text-green-700 focus:outline-none bg-gradient-to-br from-green-600 to-green-700 hover:from-green-50 hover:to-green-100 ">Get started</button>
        </Link>
      </div>
      {/* <p className="text-sm text-gray-500">No credit card required. Cancel anytime.</p> */}
    </div>
    <div className="order-1 col-span-2 md:order-2 xl:col-span-3">
      <img src={image} className="rounded-lg shadow-2xl" alt="" />
    </div>
  </div>
</div>


           {/* <section className="flex flex-col items-center justify-center text-5xl font-extrabold md:flex-row h-5/6">
                <div className="pb-5">
                    <h1 className="text-white">
                    CWNN
                    </h1>
                    </div>
                <div>
                    <img alt="CWNN" src={image} className="transition-all transform hover:scale-110 hover:-translate-y-5" />
                </div>
            </section>  */}
        </>
    )
}
