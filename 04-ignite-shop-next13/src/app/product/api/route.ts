import { NextResponse as res } from "next/server";

import { stripe } from "@/lib/stripe";
import { getProducts } from "@/functions/getProducts";

export async function POST(req: Request) {
  const { items } = await req.json();

  if (!items) {
    return res.json({ error: 'Price not found.' }, { status: 400 })
  }

  const formattedItems: string[] = items

  const lineItems = formattedItems.map(item => (
    {
      price: item,
      quantity: 1
    }
  ))

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems
  })

  return res.json({ checkoutUrl: checkoutSession.url }, { status: 201 })
  // return res.redirect(checkoutSession.url || cancelUrl) // Internal redirect
}

export async function GET() {
  const products = await getProducts();

  return res.json(products, { status: 200 })
}