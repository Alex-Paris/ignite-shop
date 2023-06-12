import ProductsList from "@/components/ProductsList";
import { getProducts } from "@/functions/getProducts";

export const revalidate = 60 // revalidate this page every 60 seconds

export const metadata = {
  title: 'Ignite Shop',
  description: 'A marketplace test for Next.js13',
}

export default async function Home() {
  const products = await getProducts();

  return (
    <ProductsList products={products} />
  )
}
