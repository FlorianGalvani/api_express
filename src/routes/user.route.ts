import express from "express";
//Controllers
import {user_list} from "controllers/user.controller";

const userRouter = express.Router();

// Home page route.
userRouter.get("/", user_list);

// About page route.
userRouter.get("/about", function (req, res) {
	res.send("About this wiki");
});

export default userRouter;