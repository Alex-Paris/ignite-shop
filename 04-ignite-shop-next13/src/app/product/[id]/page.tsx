import { Metadata } from 'next'
import Image from "next/image"

import { getProduct } from "@/functions/getProducts"
import ConfirmationButton from "./components/ConfirmationButton"

interface ProductProps {
  params: {
    id: string
  }
}

export async function generateMetadata(
  { params }: ProductProps,
): Promise<Metadata> {
  const product = await getProduct(params.id);

  return {
    title: `${product.name} | Ignite Shop`,
    description: product.description,

    alternates: {
      canonical: `${process.env.NEXT_URL}/product/${params.id}`
    },

    openGraph: {
      title: `${product.name} | Ignite Shop`,
      description: product.description || '',
      images: [product.imageUrl],
      url: `${process.env.NEXT_URL}/product/${params.id}`,
      type: 'article',
    }
  }
}

export default async function Product({ params }: ProductProps) {
  const product = await getProduct(params.id)

  return (
    <main className="grid grid-cols-2 items-stretch gap-16 max-w-[1180px] mx-auto">
      <div className="flex items-center justify-center w-full max-w-xl h-[calc(656px-0.5rem)] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1">
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl text-gray100">{product.name}</h1>
        <span className="block mt-4 text-2xl text-green300">{product.price}</span>

        <p className="mt-10 text-base leading-relaxed text-gray300">
          {product.description}
        </p>

        <ConfirmationButton priceId={product.defaultPriceId} />
      </div>
    </main>
  )
}