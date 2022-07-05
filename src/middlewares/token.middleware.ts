import { Request, Response, NextFunction } from "express";
import { checkTokenValidity } from "utils/jwt.util";

export const validateToken = (req: Request,res: Response, next: NextFunction) => {
	const cookies = req.cookies;

	if (cookies.token) {
		try {
			checkTokenValidity(cookies.token);
			next();
		} catch (error) {
			res.status(401).json("Token not valid");
		}

	} else {
		res.status(401).json("Cookie not found");
	}
};
