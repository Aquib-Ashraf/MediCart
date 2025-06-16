import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bestsellersData from "../assets/bestsellers";
import allProductsData from "../assets/products";
import toast from "react-hot-toast";
import axios from "axios"

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [bestsellers, setBestsellers] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState("");


    const fetchSeller = async () => {
    try {
        console.log('Checking seller auth...'); // Debug log
        const { data } = await axios.get('api/seller/is-auth');
        console.log('Seller auth response:', data); // Debug log
        
        if (data.success) {
            setIsSeller(true);
            console.log('User is a seller'); // Debug log
        } else {
            setIsSeller(false);
            console.log('User is not a seller'); // Debug log
        }
    } catch (error) {
        console.log('Seller auth error:', error); // Debug log
        setIsSeller(false);
    }
};

    const fetchProducts = async () => {
        setAllProducts(allProductsData);
        setBestsellers(bestsellersData);
    };

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        toast.success("Added To Cart");
    };

    const updateCartItem = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity > 0) {
            cartData[itemId] = quantity;
        } else {
            delete cartData[itemId];
        }
        setCartItems(cartData);
        toast.success("Cart Updated");
    };

    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1;
            if (cartData[itemId] === 0) {
                delete cartData[itemId];
            }
        }
        toast.success("Removed from cart");
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            // Convert itemId to number to match product IDs
            const productId = parseInt(itemId);
            let itemInfo = allProducts.find((product) => product.id === productId);
            if (itemInfo && cartItems[itemId] > 0) {
                totalAmount += itemInfo.offerPrice * cartItems[itemId];
            }
        }
        return Math.round(totalAmount * 100) / 100;
    };

    useEffect(() => {
        fetchSeller();
        fetchProducts();
    }, []);

    const value = {
        navigate,
        user,
        setUser,
        setIsSeller,
        isSeller,
        showUserLogin,
        setShowUserLogin,
        allProducts,
        bestsellers,
        currency,
        addToCart,
        updateCartItem,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery,
        getCartAmount,
        getCartCount,
        axios
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};