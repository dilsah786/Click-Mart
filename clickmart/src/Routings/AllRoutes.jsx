import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Authentications/Login'
import Signup from '../Authentications/Signup'
import HomePage from '../Pages/HomePage'
import CartPage from '../Pages/CartPage'
import WIshListPage from '../Pages/WIshListPage'
import AddressPage from '../Pages/AddressPage'
import ProductPage from '../Pages/ProductPage'
import SingleProduct from '../Pages/SingleProduct'

const AllRoutes = () => {
  return (
   <Routes>
     <Route path='/' element={<HomePage/>}  />
    <Route path='/login' element={<Login/>}  />
    <Route path='/signup' element={<Signup/>}  />
    <Route path='/cart-page' element={<CartPage/>}  />
    <Route path='/wishlist' element={<WIshListPage/>}  />
    <Route path='/addresses' element={<AddressPage/>}  />
    <Route path='/products' element={<ProductPage/>}  />
    <Route path='/products/:id' element={<SingleProduct/>}  />
   </Routes>
  )
}

export default AllRoutes