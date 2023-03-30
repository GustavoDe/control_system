import jwt from "jsonwebtoken";
export const SECRET = "4sRsWLgDgKtkk4WNsqtxb7zR7EYez2";


export async function TokenGenerate(data: any) {
	const token = jwt.sign(
		{ data },
		SECRET,
		{ expiresIn: "18h" }
	);

	return token;
}

export function VerifyTokenReceived(token: any) {
	return jwt.verify(token, SECRET);
}
