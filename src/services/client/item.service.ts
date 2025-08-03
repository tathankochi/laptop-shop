import { prisma } from "config/client";

const getProducts = () => {
    const products = prisma.product.findMany();
    return products;
}
export { getProducts };