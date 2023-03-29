import { Response, Request } from "express";
import prisma from "../../..";

export async function ListUsers(request:Request, response: Response){
	try{
		const users = await prisma.user.findMany({
			select: {
				id:true,
				name: true,
				username: true,
				type:true
			}
		}
		);
		response.status(200).json(users);
	} catch(error){
		response.status(500).json(error);
	}

}
