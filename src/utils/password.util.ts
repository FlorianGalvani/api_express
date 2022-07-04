import bcrypt from "bcrypt";
const saltRounds = 10;

export const getPasswordHash = async (password: string) => {
	const hash = await bcrypt.hash(password, saltRounds);
	return hash;
};

export const checkPassword = async (password: string, hash: string) => {
	return bcrypt.compare(password, hash);
};
