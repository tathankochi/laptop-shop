import { Request, Response } from "express";
import { getProductList } from "services/admin/product.service";
import { getAllUsers } from "services/user.service";

const getDashboardPage = (req: Request, res: Response) => {
    return res.render("admin/dashboard/show.ejs");
}

const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("admin/user/show.ejs", {
        users
    });
}

const getAdminOrderPage = (req: Request, res: Response) => {
    return res.render("admin/order/show.ejs");
}

const getAdminProductPage = async (req: Request, res: Response) => {
    const products = await getProductList();
    return res.render("admin/product/show.ejs", { products });
}

export { getAdminUserPage, getDashboardPage, getAdminOrderPage, getAdminProductPage };