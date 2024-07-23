import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Login from '../../Pages/Login'
import { useDispatch ,useSelector } from 'react-redux'
import { LogOut } from '../../Store/Slice'


function Header({ FilterBySearch = '', showmodal = false, setShowModal = '', setHideModal = '' }) {
  const [searchedValue, setSearchedvalue] = useState('')
  const [showLoggedIn , setshowLoggedIn] = useState(false)
 
  const LoggedInUser =  useSelector(state => state.SignUp.SignUpDetails)
  const dispatch = useDispatch()
  
  function OnSearchMovie(params) {

    FilterBySearch(searchedValue)
    setSearchedvalue("")
  }
  function handleShowLoggedIn(params) {
    setshowLoggedIn(!showLoggedIn)
  }

  useEffect(()=>{
    const currentStatus = LoggedInUser.filter((user)=> user.loggedIn == true)

     if(currentStatus.length>0){
    
             handleShowLoggedIn()
     }
  },[LoggedInUser])
 

    function HandleLogOut(params) {
      const data = LoggedInUser.filter((user)=> user.loggedIn == true)
      console.log(data , " details to logg out in header");
       dispatch(LogOut(data))
       alert( "Logged out Successfully")
       handleShowLoggedIn()
     }

 
 
  return (

    <header className="bg-main text-white flex justify-between items-center p-4 max-md:flex-col">
      <div className="flex items-center ">
        <Logo src='\src\assets\Logo.jpeg' alt="headerlogo" className=" w-10 h-10 mr-2" />
        <h1 className="text-2xl text-star">CTLIX</h1>
      </div>
      <nav className="flex items-center justify-between  text-star w-[60%] max-md:flex-col">
        <div className='max-md:flex'>
          <input type="text" 
          value={searchedValue} 
          onChange={(e) => setSearchedvalue(e.target.value)} 
          className=' w-[18rem] h-8 bg-amber-100 p-1 rounded-s max-md:w-[13rem]'
          name='MovieSeach' />
          <button className='w-20 bg-amber-400 text-black p-1 max-md:w-16' onClick={OnSearchMovie}>Search</button>
        </div>

        <Link to='/' className="mx-2 font-medium text-xl max-md:hidden ">Home</Link>
        <Link to='/WishList/1' className="mx-2 font-medium text-xl max-md:hidden  ">Liked</Link>
        {
          showLoggedIn ?   <button onClick={HandleLogOut} className="mx-[3.5rem] font-medium text-xl   ">Logout</button> :
          <button onClick={() => setShowModal()} className="mx-[3.5rem] font-medium text-xl max-md:hidden ">Login</button>
        }
        
           
        <Login showmodal={showmodal} setHideModal={setHideModal} 
         handleShowLoggedIn = {handleShowLoggedIn}

          />
      </nav>
    </header>
  )
}

export default Header