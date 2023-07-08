"use client"

import Image from "next/image"

import { useCart } from "@/providers/cart"
import { Products } from "@/dtos/IProductDTO"

interface CartItemProps {
  product: Products
}

export function CartItem({ product }: CartItemProps) {
  const { removeProduct } = useCart()

  return (
    <div className='flex justify-stretch gap-5'>
      <div className="w-24 h-24 bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer overflow-hidden flex items-center justify-center">
        <Image
          src={product.imageUrl}
          alt=""
          width={96}
          height={96}
          className="object-cover"
        />
      </div>
      <div className='flex flex-col text-lg'>
        <p>{product.name}</p>
        <strong>{product.formattedPrice}</strong>
        <button
          onClick={() => removeProduct(product.id)}
          className='mt-auto w-fit text-base duration-200 text-green500 hover:text-green300'
        >
          Remover
        </button>
      </div>
    </div>
  )
}
