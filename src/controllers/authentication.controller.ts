import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "models/user.model";
import { signToken } from "utils/jwt.util";
import { getPasswordHash, checkPassword } from "utils/password.util";

export const signup = async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const isExist = await User.findOne({ where: { email: req.body.email } });

	if (isExist) {
		return res.status(400).json({ error: "User already exist" });
	}

	await User.create(
		{
			email: req.body.email,
			username: req.body.username,
			password: await getPasswordHash(req.body.password)
		}
	);
	return res.status(200).json(true);
};

export const signin = async (req: Request, res: Response): Promise<Response> => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const user = await User.findOne({ where: { email: req.body.email } });

	if (user) {
		const isPasswordValid = await checkPassword(req.body.password, user.password);
		if (isPasswordValid) {
			const token = signToken(user.id);
			res.cookie("token", token, { maxAge: 900000 });
		}

	} else {
		return res.status(400).json({ error: "User does not exist" });
	}
	return res.status(200).json(true);
};







