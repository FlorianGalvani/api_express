/* eslint-disable no-mixed-spaces-and-tabs */
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Author from "./author.model";

@Table({
	timestamps: false,
	tableName: "books",
})

export default class Book extends Model {

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
		title: string;

	@ForeignKey(() => Author)
	@Column
		author_id: number;

	@BelongsTo(() => Author)
		author: Author;


}