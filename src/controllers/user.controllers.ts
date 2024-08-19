import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;

  const user = new User();
  user.firstName = firstName;
  user.lastName = lastName;

  await user.save();

  res.status(201).send(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  return res.send(users);
}
