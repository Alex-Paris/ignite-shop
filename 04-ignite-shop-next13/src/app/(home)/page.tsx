import Link from 'next/link'
import Image from 'next/image'

import { getProducts } from '@/functions/getProducts';
import { MainSlider } from './components/MainSlider';
import { Cart } from '@/components/Cart';

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Home() {
  const products = await getProducts()

  return (
    <MainSlider>
      {
        products.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            // prefetch={false}
            className="keen-slider__slide group bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer relative overflow-hidden flex items-center justify-center"
          >
            <Image
              src={product.imageUrl}
              alt=""
              width={520}
              height={480}
              className="object-cover"
            />

            <footer className="absolute bottom-1 left-1 right-1 p-3 md:p-5 rounded-md flex items-center justify-between bg-gray900 bg-opacity-60 translate-y-full opacity-0 ease-in-out duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              <div className='flex flex-col'>
                <strong className='text-sm md:text-lg text-gray100'>{product.name}</strong>
                <span className='text-lg md:text-xl font-bold text-green300'>
                  {product.price}
                </span>
              </div>

              <Cart className='bg-green500' />
            </footer>
          </Link>
        ))
      }
    </MainSlider>
  )
}
