import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import Payment from './components/Payment.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



const routes = createBrowserRouter( 
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>, 
  <Route path='' element={<Home />} />
  <Route path='payment/:customer/:amount/:id/:people' element={<Payment />} />
  </Route>
  ),
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
