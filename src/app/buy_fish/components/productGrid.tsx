// src/components/buy_fish/productGrid.tsx// Use the "use client" directive for client-side rendering
"use client"
import React from 'react';
import ProductCard from './productCard'; // Import the ProductCard component

// Define the Product interface
interface Product {
  price: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  status: string;
}

// Define the props interface for the ProductGrid component
interface ProductGridProps {
  products: Product[];
}

// Define the ProductGrid component
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div id="container" className="bg-black w-[980px] mx-auto mt-12 mb-2 text-left rounded-lg shadow-md">
      <div id="content" className="min-h-[400px] inline-block">
        <div className="product-grid w-full text-red-500 bg-[#eeeded] float-left">
          {/* Map through products and render a ProductCard for each */}
          {products.map((product, index) => (
            <ProductCard
              key={index}
              price={product.price}
              name={product.name}
              description={product.description}
              image={product.image}
              quantity={product.quantity}
              status={product.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid; // Export the ProductGrid component
