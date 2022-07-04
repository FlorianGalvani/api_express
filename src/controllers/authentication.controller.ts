import { Request, Response } from "express";
import { userSignin } from "models/storedProcedures";
import  User  from "models/user.model";
import { signToken } from "utils/jwt.util";
import { getPasswordHash, checkPassword } from "utils/password.util";

interface SignupForm {
    username: string;
    password: string;
}

interface JSONResponse  {
    success: boolean;
    error?: string;
	token?: string;
}

// Display list of all Authors.
export const signup = async (req: Request, res: Response): Promise<Response> => {
	const response: JSONResponse = {
		success: false,
		error: "",
	};

	const form: SignupForm = req.body;

	if (form.username && form.password) {
		const isExist = await User.findOne({where: {username: form.username}});

		if (isExist == null) {

			await User.create(
				{
					username: form.username, 
					password: await getPasswordHash(form.password)
				}
			);
			response.success = true;

		} else {
			response.error = "Nom d'utilisateur déja utiliser";
		}

	} else {
		response.error = "Veuillez renseigner les deux champs";
	}

	if (response.success) {
		delete response["error"];
	} 

	return res.status(200).json(response);
};

export const signin = async (req: Request, res: Response): Promise<Response> => {
	const response: JSONResponse = {
		success: false,
		error: "",
	};

	const form: SignupForm = req.body;

	if (form.username && form.password) {
		const test = await userSignin(form.username);
		const user = await User.findOne({where: {username: form.username}});
		
		console.log(test[0]);
		

		if (user) {
			const isPasswordValid = await checkPassword(form.password, user.password);
			
			if (isPasswordValid) {
				const token = signToken(user.id);
				response.token = token;
				res.cookie("token", token, { maxAge: 900000});
				response.success = true;
			
			} else {
				response.error = "Identifiant ou mot de passe incorrect";
			}
		
		} else {
			response.error = "Identifiant ou mot de passe incorrect";
		}

	} else {
		response.error = "Veuillez renseigner les deux champs";
	}

	if (response.success) {
		delete response["error"];
	} 

	return res.status(200).json(response);
};







