import { NextResponse as res } from "next/server";

import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const { priceId } = await req.json();

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
    checkoutId: checkoutSession.id,
    checkoutUrl: checkoutSession.url
  }, {
    status: 201
  })
}
