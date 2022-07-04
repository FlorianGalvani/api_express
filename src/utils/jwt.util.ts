import jwt from "jsonwebtoken";
const privateKey = "secret";

interface TokenData {
    user_id: number;
}

export const signToken = (data: TokenData) => {
	return jwt.sign({data},privateKey);
};

export const  checkTokenValidity = (token: string) => {
	return jwt.verify(token, privateKey);
};