import express from "express";

// Controllers
import { findAll, create } from "controllers/author.controller";

const authorRouter = express.Router();

// Login controller route.
authorRouter.get("/list", findAll);
authorRouter.post("/new", create);

export default authorRouter;
