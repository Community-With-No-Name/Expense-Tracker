import React from 'react'
import { useMutation } from "react-query";
import { login, postRequest } from 'api/apiCall';
import { ToastContext } from "../App"
import { queryKeys } from "api/queryKey";
import { REGISTER } from '../api/apiUrl';
import img from "../images/login.svg"
import { FacultyAndDepartments } from 'utils/FacultyAndDepartments';
import axios from "axios"
export default function Register(props) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    password2: "",
    fullName: "",
    faculty: "",
    department: "",
    image:"",
    imageFile: "",
    loading: false,
    files: null
  })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const [disabled, setDisabled] = React.useState<boolean>(false)
  const {showAlert} = React.useContext(ToastContext)
  const { mutate } = useMutation(postRequest, {
    onSuccess(data) {
      setDisabled(false);
      if(data?.message) {
        alert(`${data?.message}`)
        window.location.href="/login"
      }
      else {
        alert(`${data?.error}`)
      }
    },
    onError(data) {
      setDisabled(false);
      alert("Registration Failed")
    }
    
  });
  const submitForm = async(e: any) => {
    e.preventDefault();
    const files = state.files
    const data = new FormData()
    data.append('file', files)
    data.append('upload_preset', 'jewbreel')
    setState({loading:true, ...state})
    // const res = await fetch('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',
    // {
    //   method:'POST',
    //   body:data
    // }
    // )
    await axios.post('https://api.cloudinary.com/v1_1/jewbreel1/image/upload',data)
      .then(res=>{
        console.log(res)
        // setState({...state, image:res.data.secure_url, loading:false})
        const image = res.data.secure_url
        // const file = await res.json()
        // console.log(file, file.secure_url)
        //     setState({...state, image:file.secure_url, loading:false})
        // this.setState({logo:file.secure_url})
        // this.setState({logoLoading:false})
        // console.log(file.secure_url)
        
        state.password!==state.password2 && alert("passwords do not match")
        state.password===state.password2 && mutate({
          url: REGISTER,
          data: {
              email: state.email,
              password: state.password,
              image,
              fullName: state.fullName,
            },
          });
          setDisabled(true)
        })
  };
  const handleImage = (e: any) => {
    setState({
      ...state,
      imageFile: URL.createObjectURL(e.target.files[0]),
      files: e.target.files[0],
    });
  };
  return (
    <form onSubmit={submitForm}>
      <div className="grid max-w-6xl max-h-screen grid-cols-1 gap-10 mx-auto sm:grid-cols-2">
      <div className="hidden col-span-1 sm:my-auto sm:mx-auto sm:block" data-aos="fade-in-up" data-aos-duration="800">
      <img 
        src={img}
        // src="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg" 
        alt="" 
        className="transition-all transform hover:scale-105 hover:-translate-y-3" />
      </div>
    <div className="flex flex-col justify-center min-h-screen col-span-1 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="w-auto h-auto mx-auto transition-all transform sm:hidden hover:scale-105 hover:-translate-y-3"
          src={img}
          // src="https://res.cloudinary.com/jewbreel1/image/upload/v1625737196/jewbreel/sms/otp_mqfisv.svg"
            alt="Workflow"
            data-aos="fade-in-up" data-aos-duration="800"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign Up</h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-gray-50 sm:rounded-lg sm:px-5">
            <div className="space-y-6">
            <div>
                <label
                  htmlFor="image"
                  className="flex justify-center px-1 pt-1 pb-1 mt-1 border-2 border-gray-300 border-dashed rounded-md md:px-6 md:pt-5 md:pb-6"
                >
                  {state.imageFile ? (
                    <img
                      src={state.imageFile}
                      className="object-cover object-center space-y-1"
                    />
                  ) : (
                    <div className="space-y-1 text-center">
                      <svg
                        className="w-12 h-12 mx-auto text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <div className="relative font-medium bg-white rounded-md cursor-pointer text-rose-600 hover:text-rose-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rose-500">
                          <span>Upload Student's Image</span>
                          <input
                            onChange={handleImage}
                            id="image"
                            name="image"
                            type="file"
                            className="sr-only"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </label>
              </div>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Enter Full Name
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="fullName"
                  name="fullName"
                  type="text"
                    autoComplete="fullName"
                    placeholder="Enter Full Name"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Enter Email Address
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                    autoComplete="email"
                    placeholder="Enter Email Address"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Create Password
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                    autoComplete="password"
                    placeholder="***********"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  onChange={handleChange}
                  id="password2"
                  name="password2"
                  type="password"
                    autoComplete="password2"
                    placeholder="***********"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                disabled={disabled}
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-all transform bg-green-600 border border-transparent rounded-md shadow-sm hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Login
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    </form>
  )
}
