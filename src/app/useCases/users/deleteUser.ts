import { Request, Response } from "express";
import prisma from "../../..";
import { createResponse } from "../../utils/response";

export async function DeleteUser(request: Request, response: Response) {
	try {
		const id = Number(request.params.id);
		console.log(id);
		const existingUser = await prisma.user.findUnique({
			where: { id: id }
		});

		if (!existingUser) {
			throw new Error("Usuário não encontrado");
		}

		const deletedUser = await prisma.user.delete({
			where: { id: id },
			select: {
				id:true,
				name: true,
				username: true,
				type:true
			}
		});

		response.status(200).json(createResponse(true, deletedUser, "Usuário removido com sucesso!"));

	} catch (error:any) {
		response.status(500).json(createResponse(false, {error}, error.message));
	}



}
