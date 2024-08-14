"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// กำหนดชนิดข้อมูลสำหรับ OrderItem
interface OrderItem {
	name: string;
	price: number;
	description: string;
	image: string;
	quantity: number;
	status: string;
	id: string;
}

// กำหนดชนิดข้อมูลสำหรับ CartContext
interface CartContextType {
	order: OrderItem[];
	addToCart: (item: OrderItem) => void;
	removeFromCart: (item: OrderItem) => void;
	clearCart: () => void; // เพิ่ม clearCart ลงใน CartContextType
}

// สร้าง Context โดยมีค่าเริ่มต้นเป็น undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// สร้าง Provider สำหรับ CartContext
export const CartProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// สร้างสถานะสำหรับ Order
	const [order, setOrder] = useState<OrderItem[]>([]);

	// ฟังก์ชันเพิ่มสินค้าในตะกร้า
	const addToCart = (item: OrderItem) => {
		// ตรวจสอบว่า item มีอยู่ใน order หรือไม่
		const existingItemIndex = order.findIndex(
			(orderItem) => orderItem.id === item.id
		);

		if (existingItemIndex >= 0) {
			// อัปเดตจำนวนสินค้าใน order ที่มีอยู่แล้ว
			const updatedOrder = [...order];
			updatedOrder[existingItemIndex].quantity += 1;
			setOrder(updatedOrder);
		} else {
			// เพิ่มสินค้าใหม่ใน order
			setOrder([...order, { ...item, quantity: 1 }]);
		}
	};

	// ฟังก์ชันลดจำนวนสินค้าในตะกร้า
	const removeFromCart = (item: OrderItem) => {
		const existingItemIndex = order.findIndex(
			(orderItem) => orderItem.id === item.id
		);

		if (existingItemIndex >= 0) {
			const updatedOrder = [...order];
			if (updatedOrder[existingItemIndex].quantity > 1) {
				updatedOrder[existingItemIndex].quantity -= 1;
			} else {
				updatedOrder.splice(existingItemIndex, 1); // ลบสินค้าออกถ้าจำนวนเหลือ 0
			}
			setOrder(updatedOrder);
		}
	};

	// ฟังก์ชันเคลียร์ตะกร้าสินค้า
	const clearCart = () => {
		setOrder([]); // ตั้งค่า order เป็น array ว่างเปล่า
	};

	return (
		<CartContext.Provider
			value={{ order, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

// สร้าง Hook สำหรับใช้ CartContext
export const useCart = (): CartContextType => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
