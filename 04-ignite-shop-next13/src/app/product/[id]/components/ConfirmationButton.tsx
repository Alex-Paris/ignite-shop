"use client"

import { useMemo, useState } from "react"
import axios from "axios"

import { Button } from "@/components/Button"
import { useCart } from "@/providers/cart"
import { Products } from "@/dtos/IProductDTO"

interface ConfirmationButtonProps {
  product: Products
}

export default function ConfirmationButton({ product }: ConfirmationButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const { addProduct, products } = useCart();

  const productIndex = useMemo(() => (
    products.findIndex(prod => prod.id === product.id)
  ), [products, product.id])

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('api', { items: [product.defaultPriceId] })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <div className="flex mt-auto justify-between gap-4">
      <Button
        disabled={isCreatingCheckoutSession}
        onClick={handleBuyProduct}
        caption="Comprar agora"
        className="w-[60%]"
      />
      <Button
        disabled={productIndex > -1}
        onClick={() => addProduct({
          id: product.id,
          name: product.name,
          price: product.price,
          formattedPrice: product.formattedPrice,
          imageUrl: product.imageUrl,
          defaultPriceId: product.defaultPriceId
        })}
        caption="Colocar na Sacola"
        className="w-full"
      />
    </div>
  )
}