import React from "react";
import assets from "../assets";
import { useAppContext } from "../context/AppContext";

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems , navigate} = useAppContext();

  if (!product) return null;

  const quantity = cartItems[product.id] || 0;

  return (
    <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product.id}`); scrollTo(0,0)}} className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
      <div className="group cursor-pointer flex items-center justify-center px-2">
        <img
          className="group-hover:scale-105 transition max-w-26 md:max-w-36"
          src={product.image && product.image[0]}
          alt={product.name}
        />
      </div>
      <div className="text-gray-500/60 text-sm">
        <p>{product.category}</p>
        <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
        {/* ... your stars and rating code ... */}
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-emerald-500">
            {currency}{product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              {currency}{product.price}
            </span>
          </p>
          <div onClick={(e) => e.stopPropagation()} className="text-emerald-500">
            {quantity === 0 ? (
              <button
                className="flex items-center justify-center gap-1 bg-emerald-100 border border-emerald-300 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer"
                onClick={() => addToCart(product.id)}
              >
                <img src={assets.cart_icon} alt="cart-icon" />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-emerald-500/25 rounded select-none">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  -
                </button>
                <span className="w-5 text-center">{quantity}</span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
