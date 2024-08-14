// app/payment/status/page.tsx

"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const StatusPayment: React.FC = () => {
	const searchParams = useSearchParams();
	const status = searchParams.get("status");

	return (
		<div className="status-payment-container">
			<h1>Payment Status</h1>
			{status === "success" ? (
				<p className="text-green-500">
					Your payment was successful! Thank you for your purchase.
				</p>
			) : (
				<p className="text-red-500">
					There was an issue with your payment. Please try again.
				</p>
			)}
		</div>
	);
};

export default StatusPayment;
