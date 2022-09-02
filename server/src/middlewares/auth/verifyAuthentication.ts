import { Request, Response, NextFunction, response } from 'express';
import jwt from 'jsonwebtoken';
import config from '@src/config/config';
import User from '@src/models/user.model';

const verifyAuthentication = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const authorization: string | string[] | undefined =
			req.headers['Authorization'] || req.headers['authorization'];

		if (!authorization || !authorization.includes('Bearer ')) {
			return res.sendStatus(401);
		}

		if (typeof authorization !== 'string') return res.sendStatus(401);
		const token = authorization.split(' ')[1];

		jwt.verify(token, config.JWT_AUTH_TOKEN_SECRET, async (error, decoded) => {
			if (error || !decoded || typeof decoded === 'string')
				return res.sendStatus(401);
			const user = await User.findById(decoded.id);
			if (!user) return res.sendStatus(401);
			return next();
		});
	} catch (error) {
		res.sendStatus(500);
	}
};

export default verifyAuthentication;
