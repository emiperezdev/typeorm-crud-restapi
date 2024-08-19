import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post('/users', createUser);

userRoutes.get('/users', getUsers);

userRoutes.put('/users/:id', updateUser);

userRoutes.delete('/users/:id', deleteUser);

export default userRoutes;