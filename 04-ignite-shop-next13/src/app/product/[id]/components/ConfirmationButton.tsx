"use client"

import { useState } from "react"
import axios from "axios"

import { Button } from "@/components/Button"

interface ConfirmationButtonProps {
  priceId: string
}

export default function ConfirmationButton({ priceId }: ConfirmationButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('api', { priceId })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Button
      disabled={isCreatingCheckoutSession}
      onClick={handleBuyProduct}
      caption="Comprar agora"
    />
  )
}