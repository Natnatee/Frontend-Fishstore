import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  const secret = process.env.OMISE_SECRET_KEY;
  const omiseSignature = req.headers.get('x-omise-signature');

  // อ่าน raw body
  const rawBody = await req.text();
  
  // สร้าง signature ที่คำนวณจาก secret key
  const computedSignature = crypto
    .createHmac('sha256', secret!)
    .update(rawBody)
    .digest('hex');

  // ตรวจสอบ signature ว่าถูกต้องหรือไม่
  if (omiseSignature !== computedSignature) {
    return NextResponse.json({ message: 'Invalid signature' }, { status: 400 });
  }

  const event = JSON.parse(rawBody);

  // ตรวจสอบว่า event เป็น charge.complete และ object เป็น charge หรือไม่
  if (event.key === 'charge.complete' && event.data.object === 'charge') {
    const charge = event.data;

    // ตรวจสอบว่า charge นั้นถูกจ่ายหรือไม่
    if (charge.paid) {
      return NextResponse.json({ message: 'Payment confirmed and charge is paid' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Charge is not paid' }, { status: 200 });
    }
  }

  return NextResponse.json({ message: 'Webhook received but no action taken' }, { status: 200 });
}
