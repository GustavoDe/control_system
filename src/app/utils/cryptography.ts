import bcrypt from "bcrypt";
const saltRounds = 10;
export function Cryptography(data: string) {
	return bcrypt.hashSync(data, saltRounds);
}

export function Decryption(data_req:string, data:string){
	const passwordMatch = bcrypt.compareSync(data_req, data);
	if(!passwordMatch){
		return false;
	} else{
		return true;
	}
}
