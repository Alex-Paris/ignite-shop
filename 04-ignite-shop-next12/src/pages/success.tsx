import Link from "next/link";

import { ImageContainer, SuccessContainer } from "@/styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>
        Uhull <strong>Alex Paris</strong>, sua <strong>Camiseta Pica</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        <a>Voltar ao catálogo</a>
      </Link>
    </SuccessContainer>
  )
}