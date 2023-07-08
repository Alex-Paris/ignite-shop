"use client"

import { Cart } from '@/components/Cart';
import { Products } from '@/dtos/IProductDTO';
import { useCart } from '@/providers/cart';

interface FooterProps {
  product: Products
}

export const Footer = (({ product: { id, name, price, formattedPrice, imageUrl } }: FooterProps) => {
  const { addProduct, products } = useCart()

  const productIndex = products.findIndex(product => product.id === id)

  return (
    <footer className="absolute bottom-1 left-1 right-1 p-3 md:p-5 rounded-md flex items-center justify-between bg-gray900 bg-opacity-60 translate-y-full opacity-0 ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
      <div className='flex flex-col'>
        <strong className='text-sm md:text-lg text-gray100'>{name}</strong>
        <span className='text-lg md:text-xl font-bold text-green300'>
          {formattedPrice}
        </span>
      </div>

      <Cart
        className='bg-green500'
        disabled={productIndex > -1}
        onClick={() => addProduct({
          id,
          name,
          price,
          formattedPrice,
          imageUrl
        })}
      />
    </footer>
  )
})
