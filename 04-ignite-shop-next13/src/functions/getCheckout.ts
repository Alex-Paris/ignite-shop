import 'server-only'

import Stripe from "stripe";

import { stripe } from "@/lib/stripe";

export const getSession = (async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"]
  })

  const customerName = session.customer_details?.name;

  if ((!session.line_items) || (!session.line_items.data[0].price)) {
    return {
      customerName,
    }
  }

  const products = session.line_items.data.map(item => {
    const product = item.price?.product as Stripe.Product
    return {
      name: product.name,
      imageUrl: product.images[0]
    }
  })

  // const product = session.line_items.data[0].price.product as Stripe.Product

  console.log("function 'getSession' executed!")

  return {
    customerName,
    products
  }
});