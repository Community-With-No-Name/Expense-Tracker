import React from 'react'
import image from "../../images/login.svg"


export default function Header({user}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="overflow-hidden bg-white rounded-lg shadow">
      <h2 className="sr-only" id="profile-overview-title">
        User Profile
      </h2>
      <div className="p-6 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <img className="object-cover object-center w-40 h-40 mx-auto transition-all transform rounded-full hover:scale-110 hover:-translate-y-3" src={image} alt="" />
            </div>
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">Welcome back,</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.fullName}</p>
              <p className="text-sm font-medium text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
