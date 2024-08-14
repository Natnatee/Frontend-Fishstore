import { NextApiRequest, NextApiResponse } from 'next';
import Omise from 'omise';

const omise = Omise({
  publicKey: process.env.OMISE_PUBLIC_KEY as string,
  secretKey: process.env.OMISE_SECRET_KEY as string,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, description } = req.body;

    try {
      const charge = await omise.charges.create({
        amount,
        currency: 'thb',
        source: 'promptpay', // Use 'promptpay' directly as a string
        return_uri: 'https://frontend-fishstore.vercel.app/payment/status', // URL to redirect after payment
        description,
      });

      res.status(200).json({ qrCodeURI: charge.source?.scannable_code.image.download_uri });
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      res.status(500).json({ error: 'Failed to create QR code' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
