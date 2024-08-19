import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controllers";

const userRoutes = Router();

userRoutes.post('/users', createUser);

userRoutes.get('/users', getUsers);

userRoutes.get('/users/:id', getUserById);

userRoutes.put('/users/:id', updateUser);

userRoutes.delete('/users/:id', deleteUser);

export default userRoutes;