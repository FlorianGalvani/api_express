// @/main.ts
import "reflect-metadata";
import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import connection from "config/db.config";
import userRouter from "routes/user.route";
import authenticationRouter from "routes/authentication.route";
import { validateToken } from "middlewares/token.middleware";


const app = express();

app.use(express.json());
app.use(cookieParser());

//Public routes
app.use("/auth", authenticationRouter);

//Protected routes
app.use(validateToken);
app.use("/user", userRouter);

const start = async (): Promise<void> => {

	try {
		await connection.sync();

		app.listen(3000, () => {
			console.log("Server started on port 3000");
		});

	} catch (error) {
		console.error(error);
		process.exit(1);
	}

};

void start();