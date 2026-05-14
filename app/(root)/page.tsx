import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";

export const metadata = {
  title: "Javuli Kadal Air"
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  await delay(500);
  return (
    <>
      <ProductList data={sampleData.products} title='Newest Arrivals' limit={40} />
    </>
  )
}


export default HomePage;