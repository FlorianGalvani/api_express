/* eslint-disable no-mixed-spaces-and-tabs */
import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import Book from "./book.model";

@Table({
	timestamps: false,
	tableName: "authors",
})

export default class Author extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		firstname!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		lastname!: string;
	
	@Column({
		type: DataType.STRING,
		allowNull: false,
	
	})
		alias!: string;
	
	@HasMany(() => Book)
		books: Book[];
}