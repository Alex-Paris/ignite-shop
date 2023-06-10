import ProductsList from "./components/ProductsList";
import { getProducts } from "@/utils/getProducts";

export const revalidate = 60 // revalidate this page every 60 seconds

export default async function Home() {
  const products = await getProducts();

  return (
    <ProductsList products={products} />
  )
}
