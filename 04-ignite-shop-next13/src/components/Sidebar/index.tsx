"use client"

import { useCart } from '@/providers/cart';
import { X } from '@phosphor-icons/react';

import { CartItem } from './CartItem';
import { Button } from '../Button';

export const Sidebar = (() => {
  const { products, showSidebar } = useCart()

  const total = products.reduce((total, product) => total + product.price, 0)
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total * 0.01)

  return (
    <div
      className={`
        absolute
        w-[30rem]
        flex flex-col
        top-0 bottom-0
        p-6
        bg-gray800 shadow-gray900 shadow-2xl
        duration-300
        ${showSidebar() !== true ? '-right-[30rem] opacity-0' : 'right-0'}
      `}
    >
      <X
        size={24}
        weight='bold'
        onClick={() => showSidebar(false)}
        className='self-end cursor-pointer duration-200 fill-gray300 hover:fill-gray100'
      />

      <div className='flex flex-col flex-1 p-6'>
        <strong className='text-xl'>Sacola de compras</strong>
        <div className='flex flex-col max-h-[calc(100vh-378px)] overflow-auto mt-8 gap-6'>
          {
            products.map(product => (
              <CartItem key={product.id} product={product} />
            ))
          }
        </div>

        <footer className='mt-auto'>
          <div className='flex justify-between'>
            <p>Quantidade</p>
            <p className='text-lg'>{products.length} itens</p>
          </div>
          <div className='flex justify-between'>
            <strong className='text-lg'>Valor total</strong>
            <strong className='text-2xl'>{formattedTotal}</strong>
          </div>
          <Button
            className='w-full mt-14'
            caption='Finalizar compra'
          />
        </footer>
      </div>
    </div>
  )
})
