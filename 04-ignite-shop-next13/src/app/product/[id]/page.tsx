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

  // await new Promise(resolve => setTimeout(resolve, 10000))

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:items-stretch w-full gap-6 md:gap-16 max-w-[1180px] mx-auto">
      <div className="hidden md:flex items-center justify-center w-full max-w-xl h-[calc(656px-0.5rem)] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1">
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt=""
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-lg md:text-2xl text-gray100">{product.name}</h1>
        <span className="block mt-4 text-lg md:text-2xl text-green300">{product.formattedPrice}</span>

        <p className="mt-10 text-sm md:text-base leading-relaxed text-gray300">
          {product.description}
        </p>

        <div className="md:hidden flex items-center justify-center w-full md:max-w-xl h-96 bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-5">
          <Image
            src={product.imageUrl}
            width={200}
            height={200}
            alt=""
            className="object-cover"
          />
        </div>

        <ConfirmationButton product={product} />
      </div>
    </main>
  )
}