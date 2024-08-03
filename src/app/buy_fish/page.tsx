export const metadata = {
    title: 'ซื้อปลาสวยงาม',
  };
  
import ProductGrid from '@/components/buy_fish/productGrid';
  import Navbar from '@/components/Navbar';
  import React from 'react';
  
  const Buy_Fish = () => {
    return (
      <>
        <Navbar />
        <ProductGrid/>
      </>
    );
  };
  
  export default Buy_Fish;
  