import React from 'react';
import assets from '../assets';
import categories from '../assets/categories';
import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();

  return (
    <div 
      className="mt-16 p-6 rounded-lg" 
      style={{ backgroundColor: '#f9fafb' }}  // <-- add your desired background color here
    >
      <p className="text-2xl md:text-3xl font-medium mb-6">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center bg-white shadow-sm hover:shadow-md transition"
            onClick={() => {
              navigate(`/products/${cat.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={assets[cat.imageKey]}
              alt={cat.name}
              className="group-hover:scale-110 transition-transform max-w-28"
            />
            <p className="text-sm font-medium mt-2">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
