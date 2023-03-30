import { NextFunction, Request, Response } from "express";
import { getHeaderAuthorization } from "../utils/getHeaders";
import { getRedis } from "../utils/redisClient";
import { createResponse } from "../utils/response";
import { VerifyTokenReceived } from "../utils/tokenAuth";

export async function CheckToken(request: Request, response: Response, next: NextFunction) {
	const token = getHeaderAuthorization(request);
	if (!token) {
		return response.status(401).json(createResponse(false, {}, "Acesso negado"));
	}
	try {
		const tokenValid = await getRedis(`token:${token}`);
		if(tokenValid == "invalid"){
			throw new Error("O token utilizado, está inválido. Faça login novamente");
		} else{
			next();
		}
	} catch (error: any) {
		response.status(400).json(createResponse(false, {}, error.message));
	}
}
