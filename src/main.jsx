import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { RouterProvider } from "react-router/dom";

import { Toaster } from 'react-hot-toast'
import router from './Routes/Routes';
// import { Route } from 'react-router';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position='top-center' reverseOrder={false} />

  </StrictMode>,
)
