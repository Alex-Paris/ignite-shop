"use client"

import { Cart } from '@/components/Cart';
import { useCart } from '@/providers/cart';

interface FooterProps {
  product: {
    id: string,
    name: string,
    price: string
  }
}

export const Footer = (({ product: { id, name, price } }: FooterProps) => {
  const { addProduct, products } = useCart()

  const productIndex = products.findIndex(product => product.priceId === id)

  return (
    <footer className="absolute bottom-1 left-1 right-1 p-3 md:p-5 rounded-md flex items-center justify-between bg-gray900 bg-opacity-60 translate-y-full opacity-0 ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
      <div className='flex flex-col'>
        <strong className='text-sm md:text-lg text-gray100'>{name}</strong>
        <span className='text-lg md:text-xl font-bold text-green300'>
          {price}
        </span>
      </div>

      <Cart
        disabled={productIndex > -1}
        onClick={() => addProduct({ priceId: id })}
        className='bg-green500'
      />
    </footer>
  )
})
