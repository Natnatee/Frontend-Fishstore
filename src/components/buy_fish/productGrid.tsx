import React from 'react';
import ProductCard from './productCard';

const ProductGrid: React.FC = () => {
  const products = [
    {
      price: 10,
      name: "Nom de l'article",
      description: 'Description article',
      image: 'https://dgtfarm.com/upload/products/0.19169600%201699274584.jpg',
      quantity: 5,
      status: "public"
    },
    {
      price: 10,
      name: "Nom de l'article",
      description: 'Description article',
      image: 'https://dw.lnwfile.com/_/dw/_resize/300/300/rl/j9/7q.jpg',
      quantity: 5
     ,status: "public"
    },
    {
      price: 10,
      name: 'Dragon Bleu',
      description: 'A beautiful blue dragon',
      image: 'https://t1.blockdit.com/photos/2020/08/5f2f65b27faf640cb6fce1b8_800x0xcover__VLHsX5k.jpg',
      quantity: 5
     ,status: "pending"
    },
    {
        price: 15,
        name: 'Dragon Bleu',
        description: 'A beautiful blue dragon',
        image: 'https://t1.blockdit.com/photos/2020/08/5f2f65b27faf640cb6fce1b8_800x0xcover__VLHsX5k.jpg',
        quantity: 5
        ,status: "deleted"
    },
    {
        price: 15,
        name: 'Dragon Bleu',
        description: 'A beautiful blue dragon',
        image: 'https://t1.blockdit.com/photos/2020/08/5f2f65b27faf640cb6fce1b8_800x0xcover__VLHsX5k.jpg',
        quantity: 5
        ,status: "public"
    },
    // Add more products as needed
  ];

  return (
    <div id="container" className="bg-black w-[980px] mx-auto mt-12 mb-2 text-left rounded-lg shadow-md">
      <div id="content" className="min-h-[400px] inline-block">
        <div className="product-grid w-full text-red-500 bg-[#eeeded] float-left">
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

export default ProductGrid;
