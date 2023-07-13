import Link from "next/link";
import Image from "next/image";
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { getSession } from "@/functions/getCheckout";

interface SuccessPageProps {
  searchParams: {
    session_id: string
  }
}

export async function generateMetadata(
  { searchParams }: SuccessPageProps,
): Promise<Metadata> {
  // read route params
  const sessionId = searchParams.session_id

  // fetch data
  const session = await getSession(sessionId);

  const { customerName } = session

  return {
    title: `Sucesso ${customerName}! | Ignite Shop`,
  }
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id
  if (!sessionId) {
    redirect('/')
  }

  const session = await getSession(sessionId);
  if (!session) {
    redirect('/')
  }

  const { customerName, products } = session
  if (!products) {
    redirect('/')
  }

  return (
    <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <h1 className="text-2xl text-gray100">
        Compra efetuada!
      </h1>

      <div className="inline-flex items-center justify-center">
        {
          products.map(product => (
            <div
              key={product.name}
              className="-ml-12 first-of-type:ml-0 w-[140px] h-[140px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-full shadow-gray800 shadow-2xl p-1 mt-16 flex items-center justify-center"
            >
              <Image
                src={product.imageUrl}
                width={120}
                height={110}
                alt=""
                className="object-cover"
              />
            </div>
          ))
        }
      </div>

      <p className="text-xl text-gray300 max-w-[560px] text-center mt-8 leading-snug">
        Uhull <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
      </p>

      <Link
        className="block mt-20 text-lg text-green500 duration-200 hover:text-green300"
        href="/"
      >
        Voltar ao catálogo
      </Link>
    </main>
  )
}