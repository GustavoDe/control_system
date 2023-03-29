import express from "express";
import { PrismaClient } from "@prisma/client";
import { router } from "./router";

export const prisma = new PrismaClient();
const port = 3001;
const app = express();
export default prisma;
app.use(express.json());
app.use(router);

app.listen(`${port}`, () => {
	console.log(`server rodando na porta ${3001}`);
});
