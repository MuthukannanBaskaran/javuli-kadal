'use server';

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { DATABASE_URL, LATEST_PRODUCTS_LIMIT } from "../constants";
import { Product } from "@/types";
import { prisma } from "../prisma";

const connectionString = DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

export async function getLatestProducts(): Promise<Product[]> {
    const prisma = new PrismaClient({ adapter });

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc' }
    });

    return data.map((product) => ({
        ...product,
        price: product.price.toString(),
    }));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {

    const product = await prisma.product.findFirst({
        where: { slug: slug }
    })
    if (!product) {
        return null
    }

    return {
        ...product,
        price: product.price.toString()
    };
}