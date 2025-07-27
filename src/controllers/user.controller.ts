import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser } from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    console.log("Check users: ", users);
    return res.render("home.ejs", {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;
    await handleCreateUser(fullName, email, address);
    return res.redirect("/");
}

const postDeleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    handleDeleteUser(id);
    return res.redirect("/");
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs", {
        id: id,
        user: user
    });
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser };