import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import axios from "axios";

const Cart: React.FC = () => {
	const { order, addToCart, removeFromCart, clearCart } = useCart();
	const [qrCodeURI, setQRCodeURI] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const router = useRouter();

	const handleBuy = async () => {
		setIsLoading(true);
		setErrorMessage(null);
		try {
			const totalAmount =
				order.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100;

			// สร้าง QR Code ผ่าน API ของ Omise
			const response = await axios.post("/api/create_qr_code", {
				amount: totalAmount,
				description: "Your order description",
			});

			console.log("Response from API:", response.data);

			setQRCodeURI(response.data.qrCodeURI);
		} catch (error: any) {
			console.error("Error creating QR Code:", error);
			setErrorMessage(error.response?.data?.error || error.message);
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
			{errorMessage && (
				<div className="text-red-500">
					<p>{errorMessage}</p>
				</div>
			)}
			{qrCodeURI ? (
				<div>
					<h3>Scan to Pay</h3>
					<img src={qrCodeURI} alt="QR Code" />
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
