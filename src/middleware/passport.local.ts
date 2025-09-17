import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { getUserSumCart, getUserWithRoleById, handleLogin } from "services/client/auth.service";
import { getUserById } from "services/user.service";

const configPassportLocal = () => {
    passport.use(new LocalStrategy({
        passReqToCallback: true
    }, async function verify(req, username, password, callback) {
        const { session } = req as any;
        if (session?.messages?.length) {
            session.messages = [];
        }
        console.log("check", username, password);
        return handleLogin(username, password, callback);
    }));

    passport.serializeUser(function (user: any, cb) {
        cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
        });
    });

    passport.deserializeUser(async function (user: any, cb) {
        const { id, username } = user;
        //query to database
        const userInDB: any = await getUserWithRoleById(id);
        const sumCart = await getUserSumCart(id);
        return cb(null, { ...userInDB, sumCart: sumCart });
    });
}

export default configPassportLocal;