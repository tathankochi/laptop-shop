import getConnection from "config/database";
import { prisma } from "config/client";

const handleCreateUser = async (fullName: string, email: string, address: string) => {
    //Insert a new user
    try {
        await prisma.user.create({
            data: {
                fullName: fullName,
                username: "",
                password: "",
                address: address,
                accountType: ""
            },
        })
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

const getUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        }
    });
    return user;
}

const updateUserById = async (id: string, name: string, email: string, address: string) => {
    const updatedUser = await prisma.user.update({
        data: {
            fullName: name,
            username: "",
            password: "",
            address: address,
            accountType: ""
        },
        where: {
            id: +id
        }
    });
    return updatedUser;
}


export { handleCreateUser, handleDeleteUser, getAllUsers, getUserById, updateUserById }