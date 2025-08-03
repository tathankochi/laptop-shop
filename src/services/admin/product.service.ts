import { prisma } from "config/client";

const createProduct = async (name: string, price: number, detailDesc: string, shortDesc: string, quantity: number, factory: string, target: string, imageUpload: string) => {
    await prisma.product.create({
        data: {
            name: name,
            price: price,
            detailDesc: detailDesc,
            shortDesc: shortDesc,
            quantity: quantity,
            factory: factory,
            target: target,
            ...(imageUpload && { image: imageUpload })
        }
    });
}

const getProductList = async () => {
    return await prisma.product.findMany();
}

const handleDeleteProduct = async (id: string) => {
    const result = await prisma.product.delete({
        where: {
            id: +id
        }
    });
    return result;
}

const getProductById = async (id: string) => {
    const product = await prisma.product.findUnique({
        where: {
            id: +id
        }
    });
    return product;
}
const updateProductById = async (id: number, name: string, price: number, detailDesc: string, shortDesc: string, quantity: number, factory: string, target: string, imageUpload: string) => {
    const updatedProduct = await prisma.product.update({
        data: {
            name: name,
            price: price,
            detailDesc: detailDesc,
            shortDesc: shortDesc,
            quantity: quantity,
            factory: factory,
            target: target,
            ...(imageUpload && { image: imageUpload })
        },
        where: {
            id: id
        }
    });
    //return updatedProduct;
}
export { createProduct, getProductList, getProductById, handleDeleteProduct, updateProductById };