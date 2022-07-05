import { check } from "express-validator";

export const signinValidator = [
	[check("username").notEmpty(), check("password").notEmpty()]
];