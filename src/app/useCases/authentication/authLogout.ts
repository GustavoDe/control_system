import { Request, Response } from "express";
import { getHeaderAuthorization } from "../../utils/getHeaders";
import { setRedis } from "../../utils/redisClient";
import { createResponse } from "../../utils/response";

export async function AuthLogout(request: Request, response: Response) {
	const token = getHeaderAuthorization(request);

	try {
		const setTokenInvalid = await setRedis(`token:${token}`, "invalid");
		if (setTokenInvalid == "OK") {
			response.status(200).json(createResponse(true, {}, "Logout realizado com sucesso!"));
		} else{
			throw new Error("Não foi possível realizar o logout. Tente Novamente!");
		}

	} catch (error: any) {
		response.status(500).json(error);
	}

	//setando que o token do usuário é invalido

}
