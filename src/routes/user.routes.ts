import { Router } from "express";
import { createUser, getUsers, updateUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post('/users', createUser);

userRoutes.get('/users', getUsers);

userRoutes.put('/users/:id', updateUser);

export default userRoutes;