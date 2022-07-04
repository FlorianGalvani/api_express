import { Request, Response } from "express";
import  User  from "models/user.model";

// Display list of all Authors.
export const user_list = async (req: Request, res: Response): Promise<Response> => {
	const allUsers: User[] = await User.findAll();
	return res.status(200).json(allUsers);
};

// Display detail page for a specific Author.
export const user_detail = (req: Request, res: Response) => {
	res.send("NOT IMPLEMENTED: Author detail");
};

