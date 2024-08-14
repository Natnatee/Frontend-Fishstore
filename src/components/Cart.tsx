"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cart: React.FC = () => {
	const { order, addToCart, removeFromCart, clearCart } = useCart();
	const [qrCodeURI, setQRCodeURI] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleBuy = async () => {
		setIsLoading(true);
		try {
			const totalAmount =
				order.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100;

			// สร้าง QR Code ผ่าน API ของ Omise
			const response = await fetch("/api/create_qr_code", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount: totalAmount,
					description: "Your order description",
				}),
			});

			const data = await response.json();
			setQRCodeURI(data.qrCodeURI);

			// ตอนนี้ QR code จะแสดงให้ผู้ใช้สแกนเพื่อทำการชำระเงิน
			// Webhook จะทำหน้าที่ตรวจสอบการชำระเงินและสร้างคำสั่งซื้อใน backend
		} catch (error) {
			console.error("Error creating QR Code:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-60 w-[410px] border-4 border-red-600 rounded-3xl fixed right-10 top-28 flex flex-col items-center">
			<h1 className="text-2xl">Cart</h1>
			<div>
				{order.map((item, index) => (
					<div key={index}>
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
						<a className="border container">{item.quantity}</a>&nbsp;
						<a>
							* {item.price} ฿ = {item.price * item.quantity} ฿
						</a>
					</div>
				))}
			</div>
			{qrCodeURI ? (
				<div>
					<h3>Scan to Pay</h3>
					<Image src={qrCodeURI} alt="QR Code" />
				</div>
			) : (
				<button
					onClick={handleBuy}
					disabled={isLoading}
					className="btn bg-sky-500"
				>
					{isLoading ? "Processing..." : "Buy Now"}
				</button>
			)}
		</div>
	);
};

export default Cart;
