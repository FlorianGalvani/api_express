import express from "express";
// Controllers
import { create } from "controllers/book.controller";

const bookRouter = express.Router();

// Login controller route.
bookRouter.post("/new", create);

export default bookRouter;
