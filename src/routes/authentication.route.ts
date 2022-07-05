import express from "express";
import { check } from "express-validator";
// Controllers
import { signin, signup } from "controllers/authentication.controller";

const authenticationRouter = express.Router();

// Login controller route.
authenticationRouter.post("/signin",
	[
		check("email").isEmail().normalizeEmail(),
		check("password").notEmpty()
	],
	signin
);
authenticationRouter.post("/signup",
	[
		check("email").isEmail().normalizeEmail(),
		check("username").notEmpty(),
		check("password").notEmpty()
	],
	signup);

export default authenticationRouter;
