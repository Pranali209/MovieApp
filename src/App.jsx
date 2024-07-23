import { useState } from 'react'

import './App.css'

import { Outlet, Router } from 'react-router-dom'
import LikedPage from './Pages/LikedPage'
import { Header } from './Components'


function App() {


  return (
    
 <>
 <div className='h-auto max-w-full'>
  
    <Outlet/>
 </div>
   
   
   
 </>
 
   
      
  
  )
}

export default App
