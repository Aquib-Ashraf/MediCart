import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

const SellerLogin = () => {
  const { isSeller, setIsSeller } = useAppContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (email && password) {
      setIsSeller(true)
    }
  }

  useEffect(() => {
    if (isSeller) {
      navigate("/seller")
    }
  }, [isSeller, navigate])

  return (
    !isSeller && (
<form
  onSubmit={onSubmitHandler}
  className='min-h-screen flex items-center justify-center text-sm text-gray-600 px-4'
>
  <div className='flex flex-col gap-5 items-start p-8 py-12 min-w-80 sm:min-w-96 rounded-lg shadow-xl border border-gray-200 bg-white'>
    <p className='text-2xl font-medium m-auto'>
      Seller <span className='text-emerald-500'>Login</span>
    </p>

    <div className='w-full'>
      <p>Email</p>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
        className='border border-gray-200 rounded w-full p-2 mt-1 outline-emerald-500'
        required
      />
    </div>

    <div className='w-full'>
      <p>Password</p>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter your password'
        className='border border-gray-200 rounded w-full p-2 mt-1 outline-emerald-500'
        required
      />
    </div>

    {/* ✅ Button is inside form */}
    <button
      type='submit'
      className='bg-emerald-500 text-white w-full py-2 rounded-md hover:bg-emerald-600 transition'
    >
      Login
    </button>
  </div>
</form>

    )
  )
}

export default SellerLogin
