import Image from "next/image";

import logoImg from '../assets/logo.svg'

export default function Loading() {
  return (
    <Image
      className="absolute top-2/4 left-2/4 -mt-[65px] -ml-[65px]"
      width={130}
      src={logoImg}
      alt=""
    />
  )
}
