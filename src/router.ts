import { Router } from "express";
import { VerifyDataUser } from "./app/useCases/users/createUser";


export const router = Router();

router.post("/v1/users", VerifyDataUser);
