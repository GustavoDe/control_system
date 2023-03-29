export function createResponse(success:boolean, data: any, message:string | any){
	return {
		success: success,
		message: message,
		data: data
	};
}
