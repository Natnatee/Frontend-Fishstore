// ProductCard.tsx

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/context/CartContext';
 // ปรับตามตำแหน่งของไฟล์ CartContext

interface ProductCardProps {
  price: number;
  name: string;
  description: string;
  image: string;
  quantity: number;
  status: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  price,
  name,
  description,
  image,
  quantity,
  status,
}) => {
  const { addToCart } = useCart(); // ใช้ useCart เพื่อเข้าถึง Context

  return (
    <div className='float-left w-[320px] h-[440px] inline-block font-bold text-black mx-auto'>
      <div className='overflow-hidden bg-white rounded-sm block h-[400px] relative w-[280px] mt-1 mx-auto shadow-md transition-all duration-300 ease-in-out hover:shadow-xl'>
        {price && (
          <div className='corner absolute text-center bg-red-500 border border-red-500 w-[200px] h-[30px] top-5 right-[-50px] rotate-45 z-10 shadow-md transition-all duration-300 ease-in-out hover:bg-red-400 '>
            <p className='text-[17px] mt-[-2px] text-black/50'>{price} ฿</p>
          </div>
        )}
        <div className='thumb absolute w-full text-center h-[320px] overflow-hidden'>
          <Image
            src={image}
            alt={name}
            width={272} // specify the new width
            height={292} // specify the new height
            className='max-h-[292px] max-w-[272px] transition-all duration-300 ease-in-out hover:max-h-[300px] hover:max-w-[280px] hover:opacity-90 hover:scale-150'
          />
        </div>
        <div className='thumb-blur absolute top-[200px] w-[280px] text-center h-[100px] overflow-hidden'>
          <Image
            src={image}
            alt={name}
            width={272} // specify the new width
            height={292} // specify the new height
            className='filter-blur-0 transition-all duration-100 ease-in max-h-[292px] max-w-[272px] transform translate-y-[-200px] opacity-0 hover:filter-blur hover:opacity-100'
          />
        </div>
        <div className='body-card bg-white absolute top-[300px] h-[200px] w-full shadow-md transition-all duration-300 cubic-bezier[0,.81,.38,1.37] z-10 hover:top-[200px] hover:shadow-sm hover:bg-white/50'>
          <div className='body-header absolute w-full h-[100px] text-center'>
            <div className='name text-lg text-black/50 transition-all duration-300 ease-in-out hover:text-black hover:scale-110'>
              {name}
            </div>
            <p className='mt-0.5 text-sm text-black/30 transition-all duration-300 ease-in-out hover:text-black/80 hover:scale-120'>
              {description}
            </p>
            <p>In stock : {quantity}</p>
          </div>
          {status === 'Public' ? (
            <div className='body-footer absolute inline-block text-center w-full top-24 h-[104px] mt-3 p-0 transition-all duration-300 ease-in-out hover:top-20 hover:h-[120px]'>
              <button
                className='btn btn-default btn-block hover:bg-cyan-300'
                onClick={() =>
                  addToCart({ name, price, description, image, quantity, status })
                }
              >
                <span className='fa fa-cart-plus fa-lg ' aria-hidden='true'></span>{' '}
                Add to Cart
              </button>
              <div className='btn-group' role='group'>
                <button className='btn btn-default btn-xs d-flex gap-1 hover:bg-cyan-300'>
                  Like
                  <span>
                    <FontAwesomeIcon icon={faFish} className=' h-5' />{' '}
                  </span>
                </button>
                <button className='btn btn-default btn-xs hover:bg-cyan-300'>
                  Detail <span className='fa fa-search' aria-hidden='true'></span>
                </button>
              </div>
            </div>
          ) : status === 'pending' ? (
            <h2 className=' text-red-500 body-footer absolute inline-block top-24 text-center w-full text-3xl'>
              Coming Soon !!
            </h2>
          ) : (
            <span className='body-footer absolute inline-block top-24 w-full'>
              <h2 className=' text-red-500 text-center text-3xl'>Sold Out</h2>
              <h6 className=' text-center '>Sorry, We&apos;ll restock soon</h6>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
