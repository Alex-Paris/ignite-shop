"use client"

import { ButtonHTMLAttributes } from "react"
import { Handbag } from "@phosphor-icons/react"

interface CartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  showSumItems?: boolean
}

export function Cart({ showSumItems = false, className, ...rest }: CartProps) {
  const sumItems = 2

  return (
    <button
      className={`group/cart relative bg-gray800 rounded-md p-3 ${className}`}
      {...rest}
    >
      <Handbag size={24} weight="bold" className='duration-200 fill-gray300 group-hover/cart:fill-gray100' />

      {
        showSumItems && sumItems > 0 &&
        <span className="absolute w-6 h-6 -right-1.5 -top-2 flex items-center justify-center bg-green500 rounded-full font-bold text-sm">
          {sumItems}
        </span>
      }
    </button>
  )
}