import { Router } from "express";
import { VerifyDataUser } from "./app/useCases/users/createUser";
import { DeleteUser } from "./app/useCases/users/deleteUser";
import { EditUser } from "./app/useCases/users/editUser";
import { ListUsers } from "./app/useCases/users/listUsers";


export const router = Router();

router.post("/v1/users", VerifyDataUser);
router.get("/v1/users", ListUsers);
router.delete("/v1/users/:id", DeleteUser);
router.put("/v1/users/:id", EditUser);
