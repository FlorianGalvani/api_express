/* eslint-disable no-mixed-spaces-and-tabs */
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
	timestamps: false,
	tableName: "users",
})

export default class User extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		username!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		email!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		password!: string;

}