"use client";

import { useCart } from "@/context/CartContext";
import React from "react";
import { createOrder } from "./OrderService";
import Link from "next/link";

const Cart: React.FC = () => {
	const { order, addToCart, removeFromCart } = useCart(); // ใช้ useCart เพื่อเข้าถึง Context

	const handleBuy = async () => {
		if (order.length === 0) {
			return; // ถ้า order ว่าง จะไม่ทำอะไร
		}

		const userId = "26ff21d0-302b-452a-98f4-fab756cb4261"; // แทนที่ด้วย userId จริง

		try {
			const createdOrder = await createOrder(userId, order);
			console.log("Order created:", createdOrder);
			// ทำสิ่งที่ต้องการหลังจากสร้างคำสั่งซื้อเสร็จ
		} catch (error) {
			console.error("Failed to create order:", error);
		}
	};

	return (
		<div className="min-h-60 w-[410px] border-4 border-red-600 rounded-3xl fixed right-10 top-28 flex flex-col items-center bg-white">
			<h1 className="text-2xl">Cart</h1>
			<div>
				{order.map((item: any, index: any) => (
					<div key={index} className="">
						<a>{item.name}</a>
						<button
							className="btn border hover:bg-blue-400"
							onClick={() => addToCart(item)}
						>
							+
						</button>
						<button
							className="btn border hover:bg-red-400"
							onClick={() => removeFromCart(item)}
						>
							-
						</button>
						&nbsp;
						<a className="border container ">{item.quantity}</a>&nbsp;
						<a className="">
							* {item.price} ฿ = {item.price * item.quantity} ฿
						</a>
						<button
							className="btn btn-default btn-xs hover:bg-green-500 fa fa-search"
							aria-hidden="true"
						></button>
					</div>
				))}
			</div>
			<Link
				href={order.length > 0 ? "/payments" : "#"}
				className="btn bg-sky-500"
				onClick={handleBuy}
			>
				Buy
			</Link>
		</div>
	);
};

export default Cart;
