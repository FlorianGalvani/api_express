import { Request, Response } from "express";
import  User  from "models/user.model";

export const create = async (req: Request, res: Response): Promise<Response> => {
	const allUsers: User[] = await User.findAll();
	return res.status(200).json(allUsers);
};


