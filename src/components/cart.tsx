// Cart.tsx

"use client";

import { useCart } from '@/context/CartContext';
import React from 'react';
 // ปรับตามตำแหน่งของไฟล์ CartContext

const Cart: React.FC = () => {
  const { order, addToCart, removeFromCart } = useCart(); // ใช้ useCart เพื่อเข้าถึง Context

  return (
    <div className='min-h-60 w-[410px] border-4 border-red-600 rounded-3xl fixed right-10 top-28 flex flex-col items-center'>
      <h1 className=' text-2xl'>Cart</h1>
      <div>
        {order.map((item:any, index:any) => (
          <div key={index} className=''>
            <a>{item.name}</a>
            <button
              className='btn border hover:bg-blue-400'
              onClick={() => addToCart(item)}
            >
              +
            </button>
            <button
              className='btn border hover:bg-red-400'
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
            &nbsp;
            <a className='border container '>{item.quantity}</a>&nbsp;
            <a className=''>
              * {item.price} ฿ = {item.price * item.quantity} ฿
            </a>
            <button
              className='btn btn-default btn-xs hover:bg-green-500 fa fa-search'
              aria-hidden='true'
            ></button>
          </div>
        ))}
      </div>
      <button className='btn bg-sky-500'>Buy</button>
    </div>
  );
};

export default Cart;
