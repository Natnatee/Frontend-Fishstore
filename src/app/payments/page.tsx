"use client";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Payments: React.FC = () => {
	const [qrCodeURI, setQrCodeURI] = useState<string | null>(null);
	const { order } = useCart(); // useCart เพื่อเข้าถึง Context

	useEffect(() => {
		const fetchQrCode = async () => {
			try {
				let total: number = 0;
				order.forEach((item) => {
					total += item.price * item.quantity; // ใช้ item.price และคูณกับจำนวนที่สั่งซื้อ
				});

				console.log("Calculated Total:", total);
				total = total * 100;
				// Make the API call with the calculated total directly
				const response = await axios.post("/api/create_qr_code", {
					amount: total,
					description: "555",
				});

				if (response.data.qrCodeURI) {
					setQrCodeURI(response.data.qrCodeURI);
				}
			} catch (error) {
				console.error("Failed to create QR Code:", error);
			}
		};

		// Call fetchQrCode only if the order has items
		if (order.length > 0) {
			fetchQrCode();
		}
	}, [order]); // Add `order` as a dependency

	return (
		<>
			<Navbar />
			<section className=" bg-green-600 flex justify-center ">
				<div className="bg-orange-600 w-[1440px] min-h-[1440px]">
					<h1 className="bg-blue-400 w-full min-h-[300px] flex items-center justify-center text-6xl">
						อย่าชำระเงินจริง นี่เป็นแค่ตัวอย่าง !!!
					</h1>
					<div className=" bg-white flex justify-center">
						<div className="bg-orange-400 aspect-[1/1] min-w-[500px] w-1/2 text-center content-center">
							{qrCodeURI ? (
								<img
									src={qrCodeURI}
									alt="PromptPay QR Code"
									className="h-full w-full object-contain"
								/>
							) : (
								<p>Loading QR Code...</p>
							)}
						</div>
					</div>
					<div className=" bg-white "></div>
				</div>
			</section>
		</>
	);
};

export default Payments;
