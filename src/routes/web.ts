import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from 'controllers/user.controller';
import { getDashboardPage, getAdminUserPage, getAdminOrderPage, getAdminProductPage } from 'controllers/admin/dashboard.controller';
import fileUploadMiddleware from 'src/middleware/multer';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage)

    router.get("/create-user", getCreateUserPage)
    router.get("/handle-view-user/:id", getViewUser)
    router.post("/handle-delete-user/:id", postDeleteUser)
    router.post("/handle-update-user/", postUpdateUser)
    //admin routes
    router.get("/admin", getDashboardPage)
    router.get("/admin/user", getAdminUserPage)
    router.get("/admin/create-user", getCreateUserPage)
    router.get("/admin/order", getAdminOrderPage)
    router.get("/admin/product", getAdminProductPage)
    router.post("/admin/handle-create-user", fileUploadMiddleware("avatar"), postCreateUser)
    app.use("/", router);
}

export default webRoutes;
