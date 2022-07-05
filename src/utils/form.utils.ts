
export const validateInput = (value: string,min:number,max:number) => {
	let error: string;
	if (value.length > min && value.length < max) {
		return undefined;
	} else {
		error = `Ce champs doit contenir entre ${min} et ${max} caractere`;
		return error;
	}

};