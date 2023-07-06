import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

import Link from 'next/link'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

import Providers from '@/providers'
import { Cart } from '@/components/Cart'

import logoImg from '../assets/logo.svg'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

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
      <body className={`bg-gray900 dark:bg-white text-gray100 antialiased ${roboto.className}`}>
        <Providers>
          <div className='flex flex-col items-start justify-center pb-6 px-6 xl:px-0 min-w-[100vh] min-h-[94vh]'>
            <header className='flex items-center justify-between w-full py-8 max-w-[1180px] mx-auto'>
              <Link href="/" className='block w-fit'>
                <Image src={logoImg} alt="" className='w-24 md:w-auto' />
              </Link>

              <Cart showSumItems />
            </header>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
