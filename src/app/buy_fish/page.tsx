"use client"; // This tells Next.js that this file is a Client Component

import React, { useEffect, useState } from "react";
import ProductGrid from "@/app/buy_fish/components/productGrid"; // Import the ProductGrid component
import Navbar from "@/components/Navbar"; // Import Navbar component
import axiosInstance from "@/lib/axiosInstance"; // Import axios instance
import Cart from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";
import Loader from "@/components/Loader";

// Define the Product interface
interface Product {
	price: number;
	name: string;
	description: string;
	image: string;
	quantity: number;
	status: string;
	id: string;
	type: string;
}

// Define the page component
const BuyFishPage = () => {
	const [products, setProducts] = useState<Product[]>([]); // State to store product data
	const [loading, setLoading] = useState<boolean>(true); // State to handle loading state

	// Fetch product data on component mount
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axiosInstance.get<Product[]>("products/"); // Fetch product data from API
				setProducts(response.data || []); // Set the fetched data to state
			} catch (error) {
				console.error("Error fetching products:", error);
				setProducts([]); // Set empty array if there's an error
			} finally {
				setLoading(false); // Set loading state to false
			}
		};

		fetchProducts();
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<CartProvider>
			<Navbar />
			<Cart />
			{loading ? (
				<Loader /> // Show loading indicator while data is being fetched
			) : (
				<ProductGrid products={products} /> // Pass products as props to ProductGrid
			)}
		</CartProvider>
	);
};

export default BuyFishPage; // Export the BuyFishPage component
