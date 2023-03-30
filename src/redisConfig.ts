import Redis from "ioredis";

const redisClient = new Redis({
	port: 6379,
	host: "localhost",
});
console.log(redisClient.status);
export default redisClient;
