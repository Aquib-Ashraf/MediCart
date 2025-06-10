import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bestsellersData from "../assets/bestsellers"; // Renamed import to avoid conflict with state variable
import allProductsData from "../assets/products"; // Assuming "products.js" contains the 'products' array from the Canvas
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

    const currency = import.meta.env.VITE_CURRENCY; // Corrected import.meta.VITE_CURRENCY to import.meta.env.VITE_CURRENCY

    const navigate = useNavigate();
    const [user , setUser] = useState(null);
    const [isseller , setIsSeller] = useState(false);
    const [showUserLogin , setShowUserLogin] = useState(false);
    const [allProducts , setAllProducts] = useState([]); // State for all products
    const [bestsellers , setBestsellers] = useState([]); // State for bestsellers

    const [cartItems , setCartItems] = useState({});
    const [searchQuery , setSearchQuery] = useState({});

    // Function to fetch both product lists
    const fetchProducts = async ()=>{
        // Set all products from the data in the Canvas (assumed to be in assets/products.js)
        setAllProducts(allProductsData);
        // Set bestsellers from the imported bestsellersData
        setBestsellers(bestsellersData);
    };

    const addToCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added To Cart");
    };

    const updateCartItem = (itemId , quantity)=>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    };

    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] -= 1;
            if(cartData[itemId] === 0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from cart");
        setCartItems(cartData);
    };

    useEffect(()=>{
        fetchProducts();
    },[]); // Empty dependency array means this runs once on component mount

    // Provide both allProducts and bestsellers in the context value
    const value = {
        navigate,
        user,
        setUser,
        setIsSeller,
        isseller,
        showUserLogin,
        setShowUserLogin,
        allProducts, // Now provides all products
        bestsellers, // Now provides bestsellers
        currency,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery
    };
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () =>{
    return useContext(AppContext);
};
