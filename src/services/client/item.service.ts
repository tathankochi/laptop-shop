import { prisma } from "config/client";

const getProducts = () => {
    const products = prisma.product.findMany();
    return products;
}

const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: {
            id: +id
        }
    });
    return product;
}
export { getProducts, getProductById };