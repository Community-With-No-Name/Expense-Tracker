
import { ChevronDownIcon, SearchIcon, SortAscendingIcon } from '@heroicons/react/solid'
import React from 'react'
import FormDialog from './AddCourseB'
// import FormDialog from './AddCourse'

export default function Title({handleSearch, handleSubmit, handleChange, open, setOpen, courses, value, setValue, title, handleSelect}) {
  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h1 className="text-2xl font-semibold text-gray-900">
        {title}
      </h1>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <label htmlFor="search_candidate" className="sr-only">
          Search
        </label>
        <div className="flex rounded-md shadow-sm">
          <div className="relative flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search_students "
              id="search_students"
              className="block w-full pl-10 border-gray-300 rounded-none focus:ring-gray-500 focus:border-gray-500 rounded-l-md sm:hidden"
              placeholder="Search"
              onChange={handleSearch}
            />
            <input
              type="text"
              name="search_students"
              id="search_students"
              className="hidden w-full pl-10 border-gray-300 rounded-none focus:ring-gray-500 focus:border-gray-500 rounded-l-md sm:block sm:text-sm"
              placeholder="Search"
              onChange={handleSearch}
            />
          </div>
          {/* <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
          >
            <SortAscendingIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            <span className="ml-2">Sort</span>
            <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </button> */}
          {/* <SlideOver title="Add Course" Component={Component} /> */}
          <FormDialog handleSubmit={handleSubmit} handleChange={handleChange} open={open} setOpen={setOpen} courses={courses} value={value} setValue={setValue} handleSelect={handleSelect} />
        </div>
      </div>
    </div>
  )
}
