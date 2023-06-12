"use client"

import { useState } from "react"
import axios from "axios"

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
    <button
      disabled={isCreatingCheckoutSession}
      onClick={handleBuyProduct}
      className="mt-auto bg-green500 border-0 rounded-lg p-5 cursor-pointer font-bold text-base duration-200 hover:enabled:bg-green300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      Comprar agora
    </button>
  )
}