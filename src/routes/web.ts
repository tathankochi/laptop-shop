import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from 'controllers/user.controller';
import getDashboardPage from 'controllers/admin/dashboard.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage)

    router.get("/create-user", getCreateUserPage)
    router.get("/handle-view-user/:id", getViewUser)
    router.post("/handle-create-user", postCreateUser)
    router.post("/handle-delete-user/:id", postDeleteUser)
    router.post("/handle-update-user/", postUpdateUser)
    //admin routes
    router.get("/admin", getDashboardPage)
    app.use("/", router);
}

export default webRoutes;
