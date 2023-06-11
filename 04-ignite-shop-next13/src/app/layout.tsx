import './styles/globals.css'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

import logoImg from '../assets/logo.svg'

export const metadata = {
  title: 'Ignite Shop',
  description: 'A marketplace test for Next.js13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray900 text-gray100 antialiased ${roboto.className}`}>
        <div className='flex flex-col items-start justify-center min-w-[100vh]'>
          <header className='w-full py-8 max-w-[1180px] mx-auto'>
            <Image src={logoImg} alt="" />
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}