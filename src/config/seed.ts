import { prisma } from "config/client"
const initDataBase = async () => {
    const countUser = await prisma.user.count();
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "tathankochi@gmail.com",
                    password: "123456",
                    accountType: "SYSTEM"
                },
                {
                    username: "haobla@gmail.com",
                    password: "123456",
                    accountType: "SYSTEM"
                }
            ]
        })
    } else {
        console.log("ALREADY INIT DATA..");
    }
}

export default initDataBase;