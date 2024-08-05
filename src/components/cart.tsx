"use client"
import React from 'react'

const Cart = () => {
  return (
        <div className='h-60 w-96 border-4 border-red-600 rounded-3xl fixed right-10 top-28 flex flex-col items-center'>
            <h1> Cart</h1>
                <div>
                    <div className=''> 
                        <a>ปลามาลาวี </a>
                        <button className='btn border hover:bg-blue-400'> + </button>
                        <button className='btn border hover:bg-red-400'> - </button>&nbsp;
                        <a className='border container '>5</a>&nbsp;
                        <a className=''>* 10 ฿ = 50 ฿</a>
                        <button className="btn btn-default btn-xs hover:bg-green-500 fa fa-search"  aria-hidden="true">
                        </button>
                    </div>
                    <div className=''> 
                        <a>ปลาซิวข้างขวาน </a>
                        <button className='btn border hover:bg-blue-400'> + </button>
                        <button className='btn border hover:bg-red-400'> - </button>&nbsp;
                        <a className='border container '>5</a>&nbsp;
                        <a className=''>* 10 ฿ = 150 ฿</a>
                        <button className="btn btn-default btn-xs hover:bg-green-500 fa fa-search"  aria-hidden="true">
                        </button>
                    </div>
                    <div className=''> 
                        <a>กุ้งแคระแดง </a>
                        <button className='btn border hover:bg-blue-400'> + </button>
                        <button className='btn border hover:bg-red-400'> - </button>&nbsp;
                        <a className='border container '>5</a>&nbsp;
                        <a className=''>* 10 ฿ = 150 ฿</a>
                        <button className="btn btn-default btn-xs hover:bg-green-500 fa fa-search"  aria-hidden="true">
                        </button>
                    </div>
                </div>
                <button className='btn bg-sky-500'>
                    Buy
                </button>
        </div>
  )
}

export default Cart
