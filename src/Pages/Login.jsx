import React, { useEffect } from 'react'
import Logo from '../Components/Header/Logo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDetails, Login as SliceLogin } from '../Store/Slice'
import { useContext } from 'react';



function Login({ showmodal, setHideModal, handleShowLoggedIn }) {
  const dispatch = useDispatch()

  const [LoginDeatils, setLoginDeatils] = useState({
    email: "",
    password: ""
  })

  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("")

  const data = useSelector(state => state.SignUp.SignUpDetails)



  function handleFormSubmit(params) {

    const existingUser = data.find((user) => user.email === LoginDeatils.email);
  
    if (existingUser) {
      alert("User already exists")
      setError(" User already exists")
      setSignup(!signup)
      dispatch(SliceLogin(existingUser))
      setError("")
      handleShowLoggedIn()
      setHideModal()
    }
    else if(LoginDeatils.email === "" && LoginDeatils.password === "") {
      setError("please fill all the feilds")
    }
    else if ( LoginDeatils.email !== "" && LoginDeatils.password !== "" ){

      dispatch(addDetails(LoginDeatils))
      handleShowLoggedIn()
      setError("Please Sign UP")
      setHideModal()
    }
  
     

    }

  
  function handleOnChange(e) {
    console.log(e.target.name);
    setLoginDeatils({ ...LoginDeatils, [e.target.name]: e.target.value.toUpperCase() })

  }

  return (
    <>
      {showmodal && (

        <div className="flex items-center justify-center fixed top-36 left-[38%] rigth-[50%]  z-50 max-md:align-middle max-md:left-0"
          role="dialog"
          aria-modal="true">
          <div
            className="bg-main border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200"
          >
            <div
              className="mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
            >
              <Logo src='\src\assets\Logo.jpeg' alt="headerlogo" className=" w-24 h-24 mr-2" />
              <h1 className="text-white text-2xl">Sign in to <b className='text-star'>CTLIX</b></h1>
              <input
                className="w-full p-2 bg-blue-900 rounded-md border
                 border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                placeholder="Email"
                type="email"
                name="email"
                value={LoginDeatils.email}
                onChange={(e) => handleOnChange(e)}
              />
              {signup && (
                <input
                  className="w-full p-2 bg-blue-900 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={LoginDeatils.password}
                  onChange={(e) => handleOnChange(e)}
                />
              )}
              <button
                className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border-[4px] border-gray-700 hover:border-blue-500 transition-all duration-200"
                type="submit"
                onClick={handleFormSubmit}>Submit</button>
              <p>
                Don't have an account?
                <a
                  className="font-semibold text-white hover:text-blue-500 transition-all duration-200"
                  onClick={() => setSignup(!signup)}
                >Sign up</a>
              </p>
              <p className='text-red-600'>{error}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}



export default Login