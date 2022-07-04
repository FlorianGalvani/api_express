import { Sequelize } from "sequelize-typescript";

import  User  from "models/user.model";

const connection = new Sequelize({
	dialect: "mariadb",
	host: "localhost",
	username: "root",
	password: "",
	database: "api_express",
	models: [User],
});

export default connection;