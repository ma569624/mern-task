import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import CheckoutPage from '../pages/checkout/CheckoutPage'
import PaymentSucess from '../pages/checkout/PaymentSucess'

const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/payment-success' element={<PaymentSucess />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default PageRoute
