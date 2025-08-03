import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = async (plainText: string) => {
    return await bcrypt.hash(plainText, saltRounds);
}
const handleCreateUser = async (fullName: string, email: string, address: string, phone: string, avatar: string, role: string) => {
    //Insert a new user
    try {
        const defaultPassword = await hashPassword("123456");
        const newUser = await prisma.user.create({
            data: {
                fullName: fullName,
                username: email,
                password: defaultPassword,
                address: address,
                accountType: ACCOUNT_TYPE.SYSTEM,
                avatar: avatar,
                phone: phone,
                roleId: +role
            },
        })
        return newUser;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleDeleteUser = async (id: string) => {
    const result = await prisma.user.delete({
        where: {
            id: +id
        }
    });
    return result;
}

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const getAllRoles = async () => {
    const users = await prisma.role.findMany();
    return users;
}

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        }
    });
    return user;
}

const updateUserById = async (id: string, name: string, phone: string, role: string, address: string, avatar: string) => {
    const updatedUser = await prisma.user.update({
        data: {
            fullName: name,
            phone: phone,
            roleId: +role,
            address: address,
            ...(avatar !== undefined && { avatar: avatar })
        },
        where: {
            id: +id
        }
    });
    return updatedUser;
}


export { handleCreateUser, handleDeleteUser, getAllUsers, getUserById, updateUserById, getAllRoles, hashPassword }