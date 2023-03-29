import { Request, Response } from "express";
import prisma from "../../..";
import { createResponse } from "../../utils/response";

export async function EditUser(request: Request, response: Response) {

	try {
		const userId = Number(request.params.id);
		const { name, type } = request.body;
		const updateData = {
			name,
			type
		};

		const updateFields = {
			name: "",
			type: ""
		};

		const fieldToUpdate = {
			...updateFields,
			...updateData
		};

		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: fieldToUpdate,
			select: {
				id: true,
				name: true,
				username: true,
				type: true
			}
		});

		response.status(200).json(createResponse(true, updatedUser, "Usuário atualizado com sucesso"));

	}
	catch(error:any) {
		response.status(500).json(createResponse(false, {}, error.message ));
	}
}
