import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export const metadata = {
  title: "Javuli Kadal Air"
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  await delay(500);
  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={40} />
    </>
  )
}


export default HomePage;