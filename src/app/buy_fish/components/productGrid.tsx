// src/components/buy_fish/productGrid.tsx
"use client";

import React from "react";
import ProductCard from "./productCard"; // Import the ProductCard component

// Define the Product interface
interface Product {
	price: number;
	name: string;
	description: string;
	image: string;
	quantity: number;
	status: string;
	id: string; // Ensure id is unique for each product
	type: string;
}

// Define the props interface for the ProductGrid component
interface ProductGridProps {
	products: Product[];
}

// Define the ProductGrid component
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
	return (
		<div
			id="container"
			className=" w-[980px] mx-auto mt-12 mb-2 text-left rounded-lg shadow-md"
		>
			<div id="content" className="min-h-[400px] inline-block">
				<div className="product-grid grid grid-cols-1 3xl:grid-cols-3 gap-4 w-full text-red-500 bg-[#eeeded]">
					{/* Map through products and render a ProductCard for each */}
					{products.map((product) => (
						<ProductCard
							key={product.id} // Use product.id as the unique key
							price={product.price}
							name={product.name}
							description={product.description}
							image={product.image}
							quantity={product.quantity}
							status={product.status}
							id={product.id}
							type={product.type}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid; // Export the ProductGrid component
