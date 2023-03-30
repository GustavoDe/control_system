import { Request, Response } from "express";
import prisma from "../../..";
import { Decryption } from "../../utils/cryptography";
import { setRedis } from "../../utils/redisClient";
import { createResponse } from "../../utils/response";
import { TokenGenerate } from "../../utils/tokenAuth";

export async function AuthLogin(request: Request, response: Response) {

	const { username, password } = request.body;
	try {
		if (!username && !password) {
			throw new Error("É necessário Usuário e Senha para realizar o login");
		}
		if (!username) {
			throw new Error("É necessário o preenchimento do nome de usuário para fazer login");
		} if (!password) {
			throw new Error("É necessário o preenchimento da sua senha de acesso!");
		}

		const User: any | null = await prisma.user.findUnique({
			where: {
				username: username,
			}
		});

		if (User != null) {

			if (Decryption(password, User.password) == false) {
				throw new Error("Verifique se a senha está correta");
			} else {

				const data = {
					user: {
						username: User.username,
						id: User.id,
						type: User.type,
						name: User.name
					},
					token: ""
				};

				data.token = await TokenGenerate(data.user);

				response.status(200).json(createResponse(true, data, "Usuário logado com sucesso"));
			}

		}

	}
	catch (error: any) {
		response.status(500).json(createResponse(false, {}, error.message));
	}

}
