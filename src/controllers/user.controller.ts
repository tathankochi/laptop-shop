import { Request, Response } from "express";
import { getAllRoles, getAllUsers, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";
const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("home.ejs", {
        users: users
    });
}

const getCreateUserPage = async (req: Request, res: Response) => {
    const roles = await getAllRoles();
    return res.render("admin/user/create", {
        roles
    });
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, username, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? null;
    console.log("RoleId: ", role);
    await handleCreateUser(fullName, username, address, phone, avatar, role);
    return res.redirect("/admin/user");
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
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

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, email, address } = req.body;
    await updateUserById(id, fullName, email, address);
    return res.redirect("/");
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };