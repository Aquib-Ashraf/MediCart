import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import assets from '../assets'
import { useAppContext } from '../context/AppContext'

function Navbar() {
    const [open, setOpen] = React.useState(false)
    const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, cartItems = [] , getCartCount } = useAppContext();
    const location = useLocation();

    const logout = async () => {
        setUser(null);
        navigate('/')
    }

    useEffect(() => {
        if (searchQuery.length > 0 && location.pathname !== "/products") {
            navigate("/products");
        }
    }, [searchQuery]);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            {/* Logo */}
            <NavLink to='/' onClick={() => setOpen(false)}>
                <img className="h-12 w-19" src="https://dynamic.brandcrowd.com/asset/logo/9222cd62-f6ac-4b55-b9f2-43b4d85ac0e4/logo-search-grid-2x?logoTemplateVersion=1&v=638755756797900000&text=Pharmacy&colorpalette=green" alt="Pharmacy Logo" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>All Product</NavLink>
                <NavLink to='/contact'>Contact</NavLink>

                {/* Search bar */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search products"
                    />
                    <img src={assets.search_icon} alt="Search" className='w-4 h-4' />
                </div>

                {/* Cart Icon */}
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="Cart" className='w-6 opacity-80' />
                    {getCartCount() > 0 && (
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
                            {getCartCount()}
                        </button>
                    )}
                </div>

                {/* Login / Profile */}
                {!user ? (
                    <button
                        onClick={() => setShowUserLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full"
                    >
                        Login
                    </button>
                ) : (
                    <div className='relative group'>
                        <img src={assets.profile_icon} className="w-10" alt="User Profile" />
                        <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                            <li onClick={() => navigate("/my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}

            <div className='flex items-center gap-6 sm:hidden'>
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <img src={assets.nav_cart_icon} alt="Cart" className='w-6 opacity-80' />
                    {getCartCount() > 0 && (
                        <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
                            {getCartCount()}
                        </button>
                    )}
                </div>

                <button onClick={() => setOpen(prev => !prev)} aria-label="Menu" className="">
                    <img src={assets.menu_icon} alt="Menu" />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden">
                    <NavLink to='/' onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to='/products' onClick={() => setOpen(false)}>All Product</NavLink>
                    {user && (
                        <NavLink to='/my-orders' onClick={() => setOpen(false)}>My Orders</NavLink>
                    )}
                    <NavLink to='/contact' onClick={() => setOpen(false)}>Contact</NavLink>

                    {!user ? (
                        <button
                            onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true);
                            }}
                            className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-sm"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={logout}
                            className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-sm"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    )
}

export default Navbar
