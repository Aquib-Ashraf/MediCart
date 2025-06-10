import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

function BestSeller() {
  // Destructure 'bestsellers' (the correct data source) and 'searchQuery' from the AppContext.
  const { bestsellers, searchQuery } = useAppContext();

  // State to hold the bestsellers after filtering based on search query.
  // It's initialized as an empty array, so it's always safe to call .filter() or .map().
  const [filteredBestsellers, setFilteredBestsellers] = useState([]);

  // useEffect hook to filter products whenever bestsellers or searchQuery changes.
  // This ensures dynamic updates based on search input.
  useEffect(() => {
    // Defensive check: Ensure 'bestsellers' is an array before processing.
    if (!Array.isArray(bestsellers)) {
      setFilteredBestsellers([]); // If not an array, reset to empty to prevent errors
      return;
    }

    let productsToFilter = bestsellers;

    // Apply search filtering if a search query is active.
    // Assumes 'searchQuery' is an object with a 'text' property containing the query string.
    if (searchQuery && searchQuery.text && searchQuery.text.length > 0) {
      productsToFilter = bestsellers.filter(product =>
        product.name.toLowerCase().includes(searchQuery.text.toLowerCase())
      );
    }

    // Update the state with the filtered products.
    setFilteredBestsellers(productsToFilter);
  }, [bestsellers, searchQuery]); // Dependencies: Effect runs when bestsellers or searchQuery changes

  return (
    <div className='mt-16'>
      {/* Section title for Best Sellers */}
      {/* Changed styling for the title to match your latest provided code */}
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>

      {/* Grid to display filtered bestsellers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {/*
          Ensure filteredBestsellers is an array before processing.
          Then, filter by 'inStock', slice to show only the first 5, and map to ProductCard components.
        */}
        {Array.isArray(filteredBestsellers) && filteredBestsellers
          .filter(product => product.inStock) // Only show products that are in stock
          .slice(0, 5) // Limit to the top 5 bestsellers, as per your request
          .map((product, index) => (
            // Render a ProductCard for each filtered, in-stock, and sliced bestseller
            <ProductCard key={index} product={product} />
          ))}
          {/* Display a message if no bestsellers are found after filtering */}
          {Array.isArray(filteredBestsellers) && filteredBestsellers.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">No bestsellers found.</p>
          )}
      </div>
    </div>
  );
}

export default BestSeller;
