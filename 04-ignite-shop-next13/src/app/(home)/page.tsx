import Link from 'next/link'
import Image from 'next/image'

import { getProducts } from '@/functions/getProducts';
import { MainSlider } from './components/MainSlider';
import { Footer } from './components/Footer';

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Home() {
  const products = await getProducts()

  return (
    <MainSlider>
      {
        products.map(product => (
          <div
            key={product.id}
            className="keen-slider__slide group relative flex rounded-lg overflow-hidden"
          >
            <Link
              // prefetch={false}
              href={`/product/${product.id}`}
              className="bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg cursor-pointer overflow-hidden flex items-center justify-center"
            >
              <Image
                src={product.imageUrl}
                alt=""
                width={520}
                height={480}
                className="object-cover"
              />

            </Link>
            <Footer product={product} />
          </div>
        ))
      }
    </MainSlider>
  )
}
