import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <div className='w-full max-w-screen-2xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </AuthProvider>
  </React.StrictMode>,
)
