'use server';

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_URL, LATEST_PRODUCTS_LIMIT } from "../constants";

const connectionString = DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

export async function getLatestProducts() {
    const prisma = new PrismaClient({ adapter });

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' }
    });

    console.log("data", data);
    return data;
}