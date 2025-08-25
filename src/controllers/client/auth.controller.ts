import { Request, Response } from "express";
import { registerNewUser } from "services/client/auth.service";
import { RegisterSchema, TRegisterSchema } from "src/validation/register.schema";
const getLoginPage = (req: Request, res: Response) => {
    const { session } = req as any;
    const messages = session?.messages ?? [];
    return res.render("client/auth/login.ejs", {
        messages
    });
}

const getRegisterPage = (req: Request, res: Response) => {
    const errors = [];
    const oldData = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    return res.render("client/auth/register.ejs", { errors, oldData });
}

const postRegister = async (req: Request, res: Response) => {
    const { fullName, email, password, confirmPassword } = req.body as TRegisterSchema;
    console.log("🚀 ~ postRegister ~ password:", password)
    console.log("🚀 ~ postRegister ~ email:", email);
    console.log("🚀 ~ postRegister ~ fullName:", fullName);

    const validate = await RegisterSchema.safeParseAsync(req.body);

    if (!validate.success) {
        //error
        const errorsZod = validate.error.issues;
        const errors = errorsZod.map(item => `${item.message} (${item.path[0]})`);
        console.log("🚀 ~ postRegister ~ errors:", errors)

        const oldData = {
            fullName, email, password, confirmPassword
        }
        return res.render("client/auth/register.ejs", {
            errors, oldData
        });
    }
    //success
    await registerNewUser(fullName, email, password);
    return res.redirect("/login");
}

const getSuccessRedirectPage = (req: Request, res: Response) => {
    const user = req.user as any;
    if (user?.role?.name === "ADMIN") {
        res.redirect("/admin")
    }
    else
        res.redirect("/")
}
export { getLoginPage, getRegisterPage, postRegister, getSuccessRedirectPage };