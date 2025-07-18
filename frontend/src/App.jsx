import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import SellerLogin from './components/seller/SellerLogin'

// Pages
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'
import SellerLayout from './pages/seller/SellerLayout'
import AddProduct from './components/seller/AddProduct'
import ProductList from './components/seller/ProductList'
import Orders from './components/seller/Orders'

const App = () => {
  const location = useLocation()
  const isSellerPath = location.pathname.startsWith('/seller')
  const { showUserLogin, isSeller } = useAppContext()

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div className={isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'}>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/my-orders' element={<MyOrders />} />

          {/* Seller Route */}
          <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>
            <Route index element = {isSeller ? <AddProduct/> : null}/>
            <Route path = 'product-list' element = { <ProductList/> }/>
            <Route path = 'orders' element = {<Orders/>}/>
          </Route>
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  )
}

export default App
