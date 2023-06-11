import Link from "next/link";
import Image from "next/image";

import { getSession } from "@/functions/getCheckout";

interface SuccessPageProps {
  params: {
    session_id: string
  }
}

export default async function SuccessPage({ params }: SuccessPageProps) {
  const { customerName, product } = await getSession(params.session_id);

  return (
    <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <h1 className="text-2xl text-gray100">
        Compra efetuada!
      </h1>

      <div className="w-full max-w-[130px] h-[145px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 mt-16 flex items-center justify-center">
        <Image
          src={product.imageUrl}
          width={120}
          height={110}
          alt=""
          className="object-cover"
        />
      </div>

      <p className="text-xl text-gray300 max-w-[560px] text-center mt-8 leading-snug">
        Uhull <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link
        className="block mt-20 text-lg text-green500 hover:text-green300"
        href="/"
      >
        Voltar ao catálogo
      </Link>
    </main>
  )
}