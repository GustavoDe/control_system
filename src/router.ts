import { Router } from "express";
import { CheckToken } from "./app/middlewares/authMiddleeare";
import { AuthLogin } from "./app/useCases/authentication/authLogin";
import { AuthLogout } from "./app/useCases/authentication/authLogout";
import { VerifyDataUser } from "./app/useCases/users/createUser";
import { DeleteUser } from "./app/useCases/users/deleteUser";
import { EditUser } from "./app/useCases/users/editUser";
import { ListUsers } from "./app/useCases/users/listUsers";


export const router = Router();

//CRUD USERS
router.post("/v1/users", VerifyDataUser);
router.get("/v1/users", CheckToken, ListUsers);
router.delete("/v1/users/:id", CheckToken, DeleteUser);
router.put("/v1/users/:id", CheckToken, EditUser);

//AUTH
router.post("/v1/auth/login", AuthLogin);
router.delete("/v1/auth/logout", CheckToken, AuthLogout);

