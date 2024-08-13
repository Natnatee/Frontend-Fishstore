import React from 'react';
import ProductGrid from '@/app/buy_fish/components/productGrid'; // Import the ProductGrid component
import Navbar from '@/components/Navbar'; // Import Navbar component
import axiosInstance from '@/lib/axiosInstance'; // Import axios instance
import Cart from '@/components/cart';

// Define the Product interface
interface Product {
  price: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  status: string;
  id: string;
}

// Define the metadata for the page
export const metadata = {
  title: 'ซื้อปลาสวยงาม',
};

// Fetch product data at build time
const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axiosInstance.get<Product[]>('products/'); // Fetch product data from API
    return response.data || []; // Return the fetched data
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array if there's an error
  }
};

// Define the page component
const BuyFishPage = async () => {
  const products = await fetchProducts(); // Fetch products at build time

  return (
    <>
      <Navbar />
      <Cart/>
      <ProductGrid products={products} /> {/* Pass products as props to ProductGrid */}
    </>
  );
};

export default BuyFishPage; // Export the BuyFishPage component
