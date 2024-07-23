import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Pages/Login.jsx'
import { Provider } from 'react-redux'
import { store ,persistor } from './Store/store.js'
import LikedPage from './Pages/LikedPage.jsx'
import Home from './Pages/Home.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './Pages/Loading.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
         element : <Home /> 
       
      },
      {
        path:"WishList/:userId",
    
        element:<LikedPage/>,
      },
      {
        path:"/Login",
        element:<Login/>
     }
    ]

  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persistor}>
      <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
