import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.get('/users', async()=> {
    const users = await prisma.user.findMany();
    return users;
});

const port = 3333;
app.listen({
    port
}).then(() => {
    console.log(`🚀 Server running on port ${port}`);
})