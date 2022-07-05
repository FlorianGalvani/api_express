import { Sequelize } from "sequelize-typescript";

import  User  from "models/user.model";
import Author from "models/author.model";
import Book from "models/book.model";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./db.sqlite", // or ':memory:'
	models: [User,Author,Book],
});

export default sequelize;