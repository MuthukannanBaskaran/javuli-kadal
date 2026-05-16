import { prisma } from "../lib/prisma";
import sampleData from "../db/sample-data";

async function main() {
    await prisma.product.deleteMany();

    const createdProducts = await prisma.product.createMany({
        data: sampleData.products,
    });

    console.log("Products inserted:", createdProducts);

    const allProducts = await prisma.product.findMany();

    console.log(
        "All Products:",
        JSON.stringify(allProducts, null, 2)
    );
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });