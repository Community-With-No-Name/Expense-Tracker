import { Dialog, DialogTitle, DialogContent, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { SingleAutoComplete } from 'utils/AutoComplete'

export default function FormDialog({handleSubmit, handleChange, open, setOpen, courses, value, setValue}) {
  // const [open, setOpen] = React.useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClickClose = () => {
    setOpen(false)
  }
  const data = courses?.map(course=>{
    return {
      label: course?.courseName,
      value: course?.courseName
    }
  })
  return (
    <>
      <button
        onClick={handleClickOpen}
        type="button"
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Add New Course
      </button>
      <Dialog onClose={handleClickClose} aria-labelledby="simple-dialog-title" open={open} fullWidth className="">
        <DialogTitle id="simple-dialog-title">
        <div className="modal-title d-flex align-items-center" id="modal-title-change-username">
                        <div>
                            <div className="mr-3 shadow icon icon-sm icon-shape icon-success rounded-circle">
                                {/* <LocalAtmIcon className='cursor-pointer ' /> */}
                            </div>
                        </div>
                        <div>
                    <h6 className="mb-0">Add New Course </h6>
                        </div>
          </div>
        </DialogTitle>
        <DialogContent className='h-auto my-auto'>
          <form onSubmit={handleSubmit} className='mx-3 mb-3'>
          <div className='my-2'>
              <label htmlFor="name" className="pb-3">
                Course Name
              </label>
              <SingleAutoComplete data={data} classStyles="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm" value={value} setValue={setValue} />
              {/* <input onChange={handleChange}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 mb-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Enter Course Name"
              /> */}
            </div>
            <div>
    </div>
            
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full py-2 mt-5 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md cursor-pointer group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Add Course
            </button>
              </div>
        </form>
</DialogContent>
</Dialog>
    </>
  )
}
