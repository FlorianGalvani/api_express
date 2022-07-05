import { Request, Response } from "express";
import Author from "models/author.model";
import { validateInput } from "utils/form.utils";

interface NewAuthorForm  {
	firstname: string;
	lastname: string;
	alias: string;
}
interface NewAuthorFormErrors  {
	firstname: string;
	lastname: string;
	alias: string;
}

interface JSONResponse  {
    success: boolean;
    errors?: NewAuthorFormErrors | undefined;
}

export const findAll = async (req: Request, res: Response): Promise<Response> => {
	const authors: Author[] = await Author.findAll();
	return res.status(200).json(authors);
};

export const create = async (req: Request, res: Response): Promise<Response> => {
	const response: JSONResponse = {
		success: false,
	};

	const form: NewAuthorForm = req.body;
	
	return res.status(200).json(response);
};


