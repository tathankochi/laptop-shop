import { Request, Response } from "express";
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

const getAdminProductPage = (req: Request, res: Response) => {
    return res.render("admin/product/show.ejs");
}

export { getAdminUserPage, getDashboardPage, getAdminOrderPage, getAdminProductPage };