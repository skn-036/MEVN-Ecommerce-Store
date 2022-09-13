export const generateRandomString = (
	length: number = 64,
	base: string = 'hex'
): string => {
	const crypto = require('crypto');
	return crypto.randomBytes(length).toString(base);
};

/**
 * --------------------------------------------------------------------------------
 * convert jwt expire time string(e.g: '30m' or '1d') to miliseconds
 * --------------------------------------------------------------------------------
 */
export const convertJwtExpireTimeToMS = (
	jwtExpireString: string | number = '30d'
): number => {
	if (typeof jwtExpireString === 'number') return jwtExpireString;

	const factor: string = jwtExpireString.substr(jwtExpireString.length - 1);
	const value: number = parseInt(
		jwtExpireString.slice(0, jwtExpireString.length - 2)
	);
	if (!factor || !value) return 30 * 24 * 60 * 60 * 1000;
	const multiplier =
		factor === 'y'
			? 365 * 24 * 60 * 60 * 1000
			: factor === 'd'
			? 24 * 60 * 60 * 1000
			: factor === 'w'
			? 7 * 24 * 60 * 60 * 1000
			: factor === 'h'
			? 60 * 60 * 1000
			: factor === 'm'
			? 60 * 1000
			: 30 * 24 * 60 * 60 * 1000;
	return value * multiplier;
};

/**
 * --------------------------------------------------------------------------------
 * convert jwt expire time string(e.g: '30m' or '1d') to Date Object in referrence to
 * current time
 * --------------------------------------------------------------------------------
 */
export const convertJwtExpireTimeToDate = (
	jwtExpireString: string | number = '30d'
): Date => {
	const timeInMs: number = convertJwtExpireTimeToMS(jwtExpireString);
	return new Date(Date.now() + timeInMs);
};
