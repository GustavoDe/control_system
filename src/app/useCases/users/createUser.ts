import { Request, response, Response } from "express";
import prisma from "../../..";
import { Cryptography } from "../../utils/cryptography";
import { createResponse } from "../../utils/response";

async function checkYourUserAlreadyExists(username: string) {
	const userExist: any | null = await prisma.user.findUnique({
		where: {
			username: username,
		},
	});
	if (userExist != null) {
		throw new Error("Nome de usuário já existe");
	} else {
		return username;
	}
}

export async function VerifyDataUser(request: Request, response: Response) {
	const bodyUser = {
		username: "",
		type: "",
		password: "",
		name: ""
	};

	const { name, type, username, password } = request.body;
	let hashedPassword = "";
	try {
		if (username != null) {
			await checkYourUserAlreadyExists(username).then(data => {
				bodyUser.username = data;
				if (name != null) {
					bodyUser.name = name;
					if (type != null) {
						bodyUser.type = type;
						if (password != null) {
							hashedPassword = Cryptography(password);
							bodyUser.password = hashedPassword;
							CreateUser(bodyUser).then(data => {
								response.status(201).json(createResponse(true, data, "Usuário criado com sucesso"));
							});
						} else {
							throw new Error("Cadastre uma senha para seu usuário");
						}
					} else {
						throw new Error("Selecione um tipo de usuário");
					}
				} else {
					throw new Error("Nomeie o usuário");
				}
			});
		}




	} catch (error:any) {
		response.status(500).json(createResponse(false, {error} , error.message ));
	}

}

async function CreateUser(user: any) {
	const { username, name, type, password } = user;
	const UserCreate = await prisma.user.create({
		data: {
			username,
			name,
			type,
			password
		},
		select: {
			id:true,
			name: true,
			username: true,
			type:true
		}
	});

	return UserCreate;

}
