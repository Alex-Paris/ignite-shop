import Stripe from "stripe"

import { stripe } from "../lib/stripe"

export async function getProducts() {
  await new Promise(resolve => setTimeout(resolve, 5000))

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount || 0) * 0.01
    }
  })
  console.log(products)

  return products;
}