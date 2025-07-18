import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import assets from "../assets";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { allProducts: products, navigate, currency, addToCart } = useAppContext();
  const { id } = useParams();

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  const product = products && products.length > 0 
    ? products.find((item) => String(item.id) === id)
    : null;

  useEffect(() => {
    if (products && products.length > 0 && product) {
      let productsCopy = products.slice();

      let sameCategoryProducts = productsCopy.filter(
        (item) =>
          item.category === product.category &&
          item.id !== product.id &&
          item.inStock
      );

      if (sameCategoryProducts.length < 5) {
        const otherProducts = productsCopy.filter(
          (item) =>
            item.category !== product.category &&
            item.id !== product.id &&
            item.inStock
        );
        sameCategoryProducts = [...sameCategoryProducts, ...otherProducts];
      }

      setRelatedProducts(sameCategoryProducts.slice(0, 5));
    }
  }, [products, product]);

  useEffect(() => {
    if (product?.image?.[0]) {
      setThumbnail(product.image[0]);
    }
  }, [product]);

  if (!products) {
    return (
      <div className="mt-16 text-center">
        <p className="text-lg text-red-600">DEBUG: products is null/undefined</p>
        <p className="text-sm text-gray-600">Check your AppContext setup</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="mt-16 text-center">
        <p className="text-lg text-red-600">DEBUG: products array is empty</p>
        <p className="text-sm text-gray-600">products.length = {products.length}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mt-16 text-center">
        <p className="text-lg text-red-600">DEBUG: Product not found</p>
        <p className="text-sm text-gray-600">Looking for ID: {id}</p>
        <p className="text-sm text-gray-600">
          Available IDs: {products.map((p) => p.id).join(", ")}
        </p>
        <Link to="/products" className="text-emerald-500 hover:underline mt-2 inline-block">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <p>
        <Link to={"/"}>Home</Link> /
        <Link to={"/products"}> Products</Link> /
        <Link to={`/products/${product.category.toLowerCase()}`}> {product.category}</Link> /
        <span className="text-emerald-500"> {product.name}</span>
      </p>

      <div className="flex flex-col md:flex-row gap-16 mt-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.image?.map((image, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(image)}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onError={(e) => {
                    console.error("Image failed to load:", image);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
            {thumbnail ? (
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-auto"
                onError={(e) => {
                  console.error("Main image failed to load:", thumbnail);
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%23f0f0f0'/%3E%3Ctext x='100' y='100' text-anchor='middle' dy='.3em' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";
                }}
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          <div className="flex items-center gap-0.5 mt-1">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt=""
                  className="md:w-4 w-3.5"
                />
              ))}
            <p className="text-base ml-2">(4)</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: {currency}
              {product.price}
            </p>
            <p className="text-2xl font-medium">
              MRP: {currency}
              {product.offerPrice}
            </p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {product.description?.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          <div className="flex items-center mt-10 gap-4 text-base">
            <button
              onClick={() => addToCart(product.id)}
              className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product.id);
                navigate("/cart");
              }}
              className="w-full py-3.5 cursor-pointer font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="flex flex-col items-center mt-20">
        <div className="flex flex-col items-center w-max">
          <p className="text-3xl font-medium">Related Products</p>
          <div className="w-20 h-0.5 bg-emerald-500 rounded-full mt-2"></div>
        </div>

        {/* Show Related Products */}
        {relatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
            {relatedProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 mt-8">No related products available.</p>
        )}

        <button
          onClick={() => {
            navigate("/products");
            scrollTo(0, 0);
          }}
          className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-emerald-500 hover:bg-emerald-700 hover:text-white transition"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
