"use client";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Payments: React.FC = () => {
	const [qrCodeURI, setQrCodeURI] = useState<String | null>(null);

	useEffect(() => {
		const fetchQrCode = async () => {
			try {
				const response = await axios.post("/api/create_qr_code", {
					amount: 10000,
					description: "555",
				});

				if (response.data.qrCodeURI) {
					setQrCodeURI(response.data.qrCodeURI);
				}
			} catch (error) {
				console.log("Fail to create QR Code");
			}
		};
		fetchQrCode();
	}, []);

	return (
		<CartProvider>
			<Navbar />
			<section className=" bg-green-600 flex justify-center ">
				<div className="bg-orange-600 w-[1440px] min-h-[1440px]">
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
		</CartProvider>
	);
};

export default Payments;
