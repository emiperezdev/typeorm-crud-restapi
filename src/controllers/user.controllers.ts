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
};

export const updateUser = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;
  const { id } = req.params;
  const foundUser = await User.findOneBy({ id: parseInt(id) });

  if (!foundUser) return res.status(404).send('User not found');

  await User.update({ id: parseInt(id) }, {
    firstName: firstName,
    lastName: lastName
  });

  return res.status(204);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const foundUser = await User.findOneBy({ id: parseInt(id) });

  if (!foundUser) return res.status(404).send('User not found');

  User.delete({ id: parseInt(id)});

  return res.status(200).send(foundUser);
};
