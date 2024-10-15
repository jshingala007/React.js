import React from 'react';

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const Product = ({ category, filterdata, categoryButtonClick }) => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Category buttons */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Product Categories</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {category.map((cat, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-80 transition duration-300"
              onClick={() => categoryButtonClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards for filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterdata.length > 0 ? (
          filterdata.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm text-gray-500">
                    <TagIcon />
                    <span className="ml-1">{product.category}</span>
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No products found for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
