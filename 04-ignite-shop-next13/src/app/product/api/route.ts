import { NextResponse as res } from "next/server";

import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const { priceId } = await req.json();

  if (req.method !== "POST") {
    return res.json({ error: 'Method not allowed.' }, { status: 405 })
  }

  if (!priceId) {
    return res.json({ error: 'Price not found.' }, { status: 400 })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })

  return res.json({
    checkoutUrl: checkoutSession.url
  }, {
    status: 201
  })
  // For same page use this to redirect directly
  // redirect(new URL(checkoutSession.url || '/'))
}