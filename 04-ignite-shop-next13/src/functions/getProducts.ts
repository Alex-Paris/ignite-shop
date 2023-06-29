import 'server-only'

import Stripe from "stripe"

import { stripe } from "../lib/stripe"

// Cache revalidate if props sent are different
// Without it, everything is going to be static
// Second option its use:
//export const revalidate = 60 // revalidate this page every 60 seconds
// that only works on page, route and layout files

export const getProducts = (async () => {
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((price.unit_amount || 0) * 0.01)
    }
  })
  console.log("function 'getProducts' executed!")

  return products;
});

export const getProduct = (async (id: string) => {
  // await new Promise(resolve => setTimeout(resolve, 1000))

  const product = await stripe.products.retrieve(id, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  console.log("function 'getProduct' executed!")

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format((price.unit_amount || 0) * 0.01),
    description: product.description,
    defaultPriceId: price.id
  }
});