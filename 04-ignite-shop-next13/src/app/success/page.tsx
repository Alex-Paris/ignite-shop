import Link from "next/link";

export default function Success() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto h-[656px]">
      <h1 className="text-2xl text-gray100">
        Compra efetuada!
      </h1>

      <div className="w-full max-w-[130px] h-[145px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 mt-16 flex items-center justify-center">

      </div>

      <p className="text-xl text-gray300 max-w-[560px] text-center mt-8 leading-snug">
        Uhull <strong>Alex Paris</strong>, sua <strong>Camiseta Pica</strong> já está a caminho da sua casa.
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