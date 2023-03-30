export function getHeaderAuthorization(request: any) {
	const headerAuthorization = request.headers["authorization"];
	let token;

	if (headerAuthorization != null) {
		const tokenSplit = headerAuthorization?.split(" ");
		token = tokenSplit[1];
		return token;
	}
}
