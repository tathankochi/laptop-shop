import getConnection from "config/database";
import { prisma } from "config/client";

const handleCreateUser = async (fullName: string, email: string, address: string) => {
    //Insert a new user
    try {
        await prisma.user.create({
            data: {
                name: fullName,
                email: email,
                address: address
            },
        })
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleDeleteUser = async (id: string) => {
    const connection = await getConnection();
    try {
        const sql = 'DELETE FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const getAllUsers = async () => {
    const connection = await getConnection();

    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `user`'
        );

        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const getUserById = async (id: string) => {
    const connection = await getConnection();

    try {
        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
        const values = [id];

        const [result, fields] = await connection.execute(sql, values);
        return result[0];
    } catch (err) {
        console.log(err);
        return [];
    }
}

const updateUserById = async (id: string, name: string, email: string, address: string) => {
    const connection = await getConnection();
    try {
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
        const values = [name, email, address, id];

        const [result, fields] = await connection.execute(sql, values);
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
}


export { handleCreateUser, handleDeleteUser, getAllUsers, getUserById, updateUserById }