
import { promisify } from "util";
import redisClient from "../../redisConfig";

export function getRedis(value: string) {
	const syncRedisGet = promisify(redisClient.get).bind(redisClient);
	return syncRedisGet(value);
}

export function setRedis(key: string, value: string) {
	//key:value
	const syncRedisSet = promisify(redisClient.set).bind(redisClient);
	return syncRedisSet(key, value);
}
export function test(){
	redisClient.ping(function(err:any, response:any) {
		if (err) {
			console.error("Erro ao executar comando PING: ", err);
		} else {
			console.log("Conexão com o Redis bem-sucedida! Resposta do comando PING: ", response);
		}
	});
}



