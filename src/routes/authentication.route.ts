import express from "express";
// Controllers
import { signin, signup } from "controllers/authentication.controller";

const authenticationRouter = express.Router();

// Login controller route.
authenticationRouter.post("/signin", signin);
authenticationRouter.post("/signup", signup);

export default authenticationRouter;
