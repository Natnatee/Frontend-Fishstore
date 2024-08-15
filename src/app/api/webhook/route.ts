import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createOrder } from '@/components/OrderService';

export async function POST(req: NextRequest) {
  const secret = process.env.OMISE_SECRET_KEY;
  const omiseSignature = req.headers.get('x-omise-signature');

  const rawBody = await req.text(); // อ่าน raw body
  const computedSignature = crypto
    .createHmac('sha256', secret!)
    .update(rawBody)
    .digest('hex');

  if (omiseSignature !== computedSignature) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  const event = JSON.parse(rawBody);

  if (event.key === 'charge.complete' && event.data.object === 'charge') {
    const charge = event.data;

    if (charge.paid) {
      try {
        const userId = '26ff21d0-302b-452a-98f4-fab756cb4261'; // แทนที่ด้วย userId จริง
        const createdOrder = await createOrder(userId, charge.metadata.items);
        console.log('Order created:', createdOrder);
      } catch (error) {
        console.error('Failed to create order:', error);
        return NextResponse.json({ message: 'Failed to create order' }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ message: 'Webhook received' }, { status: 200 });
}
