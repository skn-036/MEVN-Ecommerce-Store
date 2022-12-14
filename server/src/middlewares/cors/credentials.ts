import { Request, Response, NextFunction } from 'express';
import config from '@src/config/config';

export const setCorsCredentials = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const requestOrigin = req.headers['origin'] || req.headers['Origin'];
	console.log(requestOrigin);
	// for now
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Origin', 'true');

	// if (!requestOrigin) return next();

	// if (config.ALLOWED_ORIGINS.includes(requestOrigin)) {
	// 	// res.header('Access-Control-Allow-Credentials', 'true');
	// 	res.setHeader('Access-Control-Allow-Credentials', 'true');
	// }
	next();
};
