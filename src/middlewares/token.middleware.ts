import { Request, Response, NextFunction } from "express";
import { checkTokenValidity } from "utils/jwt.util";

export const validateToken = (req: Request,res: Response, next: NextFunction) => {
	const cookies = req.cookies;
	let isTokenValid;
	if (cookies.token) {
		
		try {
			isTokenValid = checkTokenValidity(cookies.token);
		} catch (error) {
			console.log("error : ", error);
		}

		if (isTokenValid) {
			next();

		} else {
			res.status(401).json("token is not valid");
		}

	} else {
		res.status(401).json("cookie not found");
	}
};
