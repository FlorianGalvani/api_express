// @/main.ts
import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connection from "config/db.config";
import userRouter from "routes/user.route";
import bodyParser from "body-parser";
import authenticationRouter from "routes/authentication.route";
import { validateToken } from "middlewares/token.middleware";
import bookRouter from "routes/book.route";
import authorRouter from "routes/author.route";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

//Public routes
app.use("/auth", authenticationRouter);

//Protected routes
app.use(validateToken);

app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/author", authorRouter);

app.use(cors());

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