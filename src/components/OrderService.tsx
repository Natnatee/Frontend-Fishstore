import axiosInstance from '@/lib/axiosInstance';

interface OrderItem {
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
    status: string;
    id: string;
  }

export const createOrder = async (userId: string, items: OrderItem[]) => {
  try {
    const response = await axiosInstance.post('orders/', {
      userId,
      items,
    });

    return response.data; // คืนค่าคำสั่งซื้อที่สร้างขึ้นใหม่
  } catch (error) {
    console.error('Failed to create order:', error);
    throw error;
  }
};
