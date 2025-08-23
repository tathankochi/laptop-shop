import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUser, postCreateUser, postDeleteUser, postUpdateUser } from 'controllers/user.controller';
import { getDashboardPage, getAdminUserPage, getAdminOrderPage, getAdminProductPage } from 'controllers/admin/dashboard.controller';
import fileUploadMiddleware from 'src/middleware/multer';
import { getAdminCreateProductPage, getProductPage, getViewProduct, postAdminCreateProductPage, postDeleteProduct, postUpdateProduct } from 'controllers/admin/product.controller';
import { getLoginPage, getRegisterPage } from 'controllers/client/auth.controller';

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/product/:id", getProductPage);
    router.get("/login", getLoginPage);
    router.get("/register", getRegisterPage);

    router.get("/create-user", getCreateUserPage);
    //admin routes
    router.get("/admin", getDashboardPage);
    router.get("/admin/user", getAdminUserPage);
    router.get("/admin/create-user", getCreateUserPage);
    router.get("/admin/order", getAdminOrderPage);
    router.get("/admin/product", getAdminProductPage);
    router.post("/admin/handle-create-user", fileUploadMiddleware("avatar"), postCreateUser);
    router.post("/admin/delete-user/:id", postDeleteUser);
    router.get("/admin/view-user/:id", getViewUser);
    router.post("/admin/update-user/", fileUploadMiddleware("avatar"), postUpdateUser);

    router.get("/admin/product", getAdminProductPage);
    router.get("/admin/create-product", getAdminCreateProductPage);
    router.post("/admin/create-product", fileUploadMiddleware("image", "images/product"), postAdminCreateProductPage);
    router.post("/admin/delete-product/:id", postDeleteProduct);
    router.get("/admin/view-product/:id", getViewProduct);
    router.post("/admin/update-product/", fileUploadMiddleware("image", "images/product"), postUpdateProduct);
    app.use("/", router);
}

export default webRoutes;
