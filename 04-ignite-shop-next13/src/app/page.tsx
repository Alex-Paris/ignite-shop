import { Suspense } from "react";

import HomePage from "./(home)";
import HomeLoading from "./(home)/loading";

export const metadata = {
  title: 'Ignite Shop',
  description: 'A marketplace test for Next.js13',
}

export default async function Home() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <HomePage />
    </Suspense>
  )
}
