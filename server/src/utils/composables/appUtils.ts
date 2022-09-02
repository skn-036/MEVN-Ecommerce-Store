export const generateRandomString = (
	length: number = 64,
	base: string = 'hex'
): string => {
	const crypto = require('crypto');
	return crypto.randomBytes(length).toString(base);
};
