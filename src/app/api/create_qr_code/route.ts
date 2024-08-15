import { NextRequest, NextResponse } from "next/server";
import Omise from "omise";

const omise = Omise({
  publicKey: process.env.OMISE_PUBLIC_KEY!,
  secretKey: process.env.OMISE_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { amount, description } = await req.json();

    // สร้าง PromptPay source
    const source = await omise.sources.create({
      amount,
      currency: "thb",
      type: "promptpay",
    });

    // ใช้ source ID ในการสร้าง charge
    const charge = await omise.charges.create({
      amount,
      currency: "thb",
      source: source.id,
      description,
    });

    if (
      !charge.source ||
      !charge.source.scannable_code ||
      !charge.source.scannable_code.image ||
      !charge.source.scannable_code.image.download_uri
    ) {
      return NextResponse.json({ error: "QR code image URI is missing" }, { status: 500 });
    }

    return NextResponse.json({ qrCodeURI: charge.source.scannable_code.image.download_uri }, { status: 200 });
  } catch (error) {
    console.error("Failed to create QR code:", error);
    return NextResponse.json({ error: "Failed to create QR code" }, { status: 500 });
  }
}
