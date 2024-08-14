// app/api/webhook.ts

import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { createOrder } from '@/components/OrderService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.OMISE_SECRET_KEY;
  const omiseSignature = req.headers['x-omise-signature'];

  const rawBody = JSON.stringify(req.body);
  const computedSignature = crypto
    .createHmac('sha256', secret!)
    .update(rawBody)
    .digest('hex');

  if (omiseSignature !== computedSignature) {
    return res.status(400).send('Invalid signature');
  }

  const event = req.body;

  if (event.key === 'charge.complete' && event.data.object === 'charge') {
    const charge = event.data;

    if (charge.paid) {
      // เมื่อได้รับการยืนยันว่าชำระเงินเสร็จ
      try {
        const userId = '26ff21d0-302b-452a-98f4-fab756cb4261'; // แทนที่ด้วย userId จริง
        const createdOrder = await createOrder(userId, charge.metadata.items);
        console.log('Order created:', createdOrder);
      } catch (error) {
        console.error('Failed to create order:', error);
      }
    }
  }

  res.status(200).send('Webhook received');
}
