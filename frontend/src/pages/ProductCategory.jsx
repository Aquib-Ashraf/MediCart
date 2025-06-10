import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import categories from '../assets/categories'; // ✅ Not destructured

import ProductCard from '../components/ProductCard'; // Assuming you want to show products

function ProductCategory() {
  const { allProducts } = useAppContext(); // ✅ Corrected
  const { category } = useParams(); // e.g., "pain-relief"

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category.toLowerCase()
  );

  const filteredProducts = allProducts.filter(
    (product) => product.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="mt-16">
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.name.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-emerald-500 rounded-full"></div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCategory;
