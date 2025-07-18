import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import assets from "../assets";
import dummyAddress from "../assets/dummyAddress";

const Cart = () => {

    const { allProducts, currency, cartItems, removeFromCart, getCartCount, updateCartItem, navigate, getCartAmount } = useAppContext()
    const [cartArray, setCartArray] = useState([])
    const [addresses, setAddresses] = useState(dummyAddress)
    const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0])
    const [paymentOption, setPaymentOption] = useState("COD")
    const [showAddress, setShowAddress] = useState(false)
    
    const getCart = () => {
        let tempArray = []
        for (const key in cartItems) {
            // Convert key to number to match product IDs
            const productId = parseInt(key)
            const product = allProducts.find((item) => item.id === productId)
            if (product) {
                const productWithQuantity = { ...product, quantity: cartItems[key] }
                tempArray.push(productWithQuantity)
            }
        }
        setCartArray(tempArray)
    } 

    const placeOrder = async () => {
        // Add your order placement logic here
        console.log("Placing order...", {
            items: cartArray,
            address: selectedAddress,
            payment: paymentOption,
            total: getCartAmount() + getCartAmount() * 2 / 100
        })
    }

    useEffect(() => {
        if (allProducts.length > 0 && cartItems) {
            getCart()
        }
    }, [allProducts, cartItems])

    return allProducts.length > 0 && cartItems ? (
        <div className="flex flex-col md:flex-row mt-16">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-emerald-500">{getCartCount()} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div onClick={() => {
                                navigate(`/products/${product.category.toLowerCase()}/${product.path}`); 
                                window.scrollTo(0, 0)
                            }} className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover" src={product.image[0]} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <p>Weight: <span>{product.weight || "N/A"}</span></p>
                                    <div className='flex items-center gap-2'>
                                        <p>Qty:</p>
                                        <select 
                                            className='outline-none border rounded px-2 py-1'
                                            value={product.quantity}
                                            onChange={(e) => updateCartItem(product.id, parseInt(e.target.value))}
                                        >
                                            {Array(Math.max(product.quantity, 9)).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">{currency}{product.offerPrice * product.quantity}</p>
                        <button onClick={() => removeFromCart(product.id)} className="cursor-pointer mx-auto">
                            <img src={assets.remove_icon} alt="remove" className="inline-block w-6 h-6" />
                        </button>
                    </div>)
                )}

                {cartArray.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500 text-lg">Your cart is empty</p>
                    </div>
                )}

                <button onClick={() => { navigate("/products"); window.scrollTo(0, 0) }} className="group cursor-pointer flex items-center mt-8 gap-2 text-emerald-500 font-medium">
                    <img className="group-hover:-translate-x-1 transition" src={assets.arrow_right_icon_colored} alt="arrow" />
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{selectedAddress ? `${selectedAddress.street} , ${selectedAddress.city} , ${selectedAddress.state} , ${selectedAddress.country}` : "No Address Found"}</p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-emerald-500 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full z-10">
                                {addresses.map((address, index) => (
                                    <p key={index} onClick={() => { setSelectedAddress(address); setShowAddress(false) }} className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer">
                                        {address.street} , {address.city} , {address.state} , {address.country}
                                    </p>
                                ))}
                                <p onClick={() => navigate("/add-address")} className="text-emerald-500 text-center cursor-pointer p-2 hover:bg-emerald-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={e => setPaymentOption(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>{currency}{getCartAmount()}</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>{currency}{Math.round(getCartAmount() * 2) / 100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>{currency}{Math.round((getCartAmount() + getCartAmount() * 2 / 100) * 100) / 100}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition">
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    ) : (
        <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading...</p>
        </div>
    )
}

export default Cart