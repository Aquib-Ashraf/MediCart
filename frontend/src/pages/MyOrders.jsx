import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import dummyOrders from '../assets/dummyOrders'
import products from '../assets/products'

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([])
  const { currency } = useAppContext()

  const fetchMyOrders = async () => {
    const enrichedOrders = dummyOrders.map(order => ({
      ...order,
      items: order.items.map(item => {
        const product = products.find(p => p.id === item.productId)
        return {
          ...item,
          product
        }
      })
    }))
    setMyOrders(enrichedOrders)
  }

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'shipped':
        return 'text-blue-600 bg-blue-50 border-blue-200'
      case 'processing':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
      case 'cancelled':
        return 'text-red-600 bg-red-50 border-red-200'
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getPaymentColor = (paymentType) => {
    switch (paymentType?.toLowerCase()) {
      case 'cod':
      case 'cash on delivery':
        return 'text-orange-600 bg-orange-50'
      case 'online':
      case 'card':
        return 'text-green-600 bg-green-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  useEffect(() => {
    fetchMyOrders()
  }, [])

  if (myOrders.length === 0) {
    return (
      <div className='mt-16 pb-16 flex flex-col items-center justify-center min-h-[400px]'>
        <div className='text-center'>
          <div className='w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center'>
            <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
            </svg>
          </div>
          <h3 className='text-xl font-semibold text-gray-900 mb-2'>No orders yet</h3>
          <p className='text-gray-500 mb-6'>You haven't placed any orders. Start shopping to see your orders here!</p>
          <button className='px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors'>
            Start Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='mt-16 pb-16 max-w-6xl mx-auto px-4'>
      {/* Header */}
      <div className='mb-12'>
        <div className='flex items-center gap-4 mb-2'>
          <h1 className='text-3xl font-bold text-gray-900'>My Orders</h1>
          <span className='px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium'>
            {myOrders.length} {myOrders.length === 1 ? 'Order' : 'Orders'}
          </span>
        </div>
        <div className='w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full'></div>
      </div>

      {/* Orders List */}
      <div className='space-y-8'>
        {myOrders.map((order, index) => (
          <div key={index} className='bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden'>
            
            {/* Order Header */}
            <div className='bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='space-y-1'>
                  <p className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Order ID</p>
                  <p className='font-mono text-sm font-semibold text-gray-900'>#{order.id}</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Payment Method</p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPaymentColor(order.paymentType)}`}>
                    {order.paymentType}
                  </span>
                </div>
                <div className='space-y-1'>
                  <p className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Total Amount</p>
                  <p className='text-lg font-bold text-gray-900'>{currency}{order.amount}</p>
                </div>
                <div className='space-y-1'>
                  <p className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Order Date</p>
                  <p className='text-sm font-medium text-gray-900'>
                    {new Date(order.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className='p-6'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <svg className='w-5 h-5 text-emerald-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
                </svg>
                Items Ordered ({order.items.length})
              </h3>
              
              <div className='space-y-4'>
                {order.items.map((item, i) => (
                  <div key={i} className='flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'>
                    {/* Product Image */}
                    <div className='flex-shrink-0'>
                      <div className='w-20 h-20 bg-white rounded-xl p-2 shadow-sm border border-gray-200'>
                        <img
                          src={item.product?.image[0]}
                          alt={item.product?.name}
                          className='w-full h-full object-cover rounded-lg'
                        />
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className='flex-1 min-w-0'>
                      <h4 className='text-lg font-semibold text-gray-900 mb-2 truncate'>
                        {item.product?.name}
                      </h4>
                      
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
                        <div className='space-y-1'>
                          <p className='text-gray-500 font-medium'>Category</p>
                          <span className='inline-flex items-center px-2 py-1 bg-white rounded-md text-xs font-medium text-gray-700 border'>
                            {item.product?.category?.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        
                        <div className='space-y-1'>
                          <p className='text-gray-500 font-medium'>Quantity</p>
                          <p className='font-semibold text-gray-900'>×{item.quantity}</p>
                        </div>
                        
                        <div className='space-y-1'>
                          <p className='text-gray-500 font-medium'>Unit Price</p>
                          <p className='font-semibold text-gray-900'>{currency}{item.product?.offerPrice}</p>
                        </div>
                        
                        <div className='space-y-1'>
                          <p className='text-gray-500 font-medium'>Subtotal</p>
                          <p className='font-bold text-emerald-600'>{currency}{item.product?.offerPrice * item.quantity}</p>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className='flex-shrink-0'>
                      <span className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-semibold border ${getStatusColor(order.status || 'Processing')}`}>
                        <div className='w-2 h-2 rounded-full bg-current mr-2'></div>
                        {order.status || 'Processing'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className='mt-6 pt-4 border-t border-gray-200 flex justify-between items-center'>
                <div className='flex items-center gap-4 text-sm text-gray-600'>
                  <div className='flex items-center gap-2'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    Ordered on {new Date(order.createdAt).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                
                <div className='flex gap-3'>
                  <button className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'>
                    View Details
                  </button>
                  <button className='px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors'>
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrders