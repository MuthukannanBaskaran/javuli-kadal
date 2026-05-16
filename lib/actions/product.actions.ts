'use server';

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

export async function getLatestProducts() {
    const prisma = new PrismaClient({ adapter });

    const data = await prisma.product.findMany({
        take: 6,
        orderBy: { createdAt: 'desc' }
    });

    return data;
}