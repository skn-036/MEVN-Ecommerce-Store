import { Request, Response } from 'express';
import User from '@src/models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '@src/config/config';

export const handleRegister = async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;
		if (!name || !email || !password) return res.sendStatus(400);

		const userData = new User({ name, email, password });
		let newUser = await userData.save();

		if (newUser) {
			const accessToken: string = jwt.sign(
				{ id: newUser._id },
				config.JWT_AUTH_TOKEN_SECRET,
				{ expiresIn: config.JWT_AUTH_TOKEN_EXPIRES_IN }
			);
			const refreshToken: string = jwt.sign(
				{ id: newUser._id },
				config.JWT_REFRESH_TOKEN_SECRET,
				{ expiresIn: config.JWT_REFRESH_TOKEN_EXPIRES_IN }
			);
			newUser.token = refreshToken;
			newUser = await newUser.save();
			const user = await User.findById(newUser._id);
			res
				.cookie('refresh-token', refreshToken, {
					httpOnly: true,
					secure: true,
					sameSite: 'none',
				})
				.status(201)
				.json({ user, token: accessToken });
		}
		res.sendStatus(500);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const handleLogin = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) return res.sendStatus(400);

		let existingUser = await User.find({ email }).select({
			email: 1,
			password: 1,
		});
		if (!existingUser || !existingUser.length) return res.sendStatus(400);

		let user = existingUser[0];

		const matched: boolean = await bcrypt.compare(password, user.password);
		if (!matched) return res.sendStatus(400);

		const accessToken: string = jwt.sign(
			{ id: user._id },
			config.JWT_AUTH_TOKEN_SECRET,
			{ expiresIn: config.JWT_AUTH_TOKEN_EXPIRES_IN }
		);
		const refreshToken: string = jwt.sign(
			{ id: user._id },
			config.JWT_REFRESH_TOKEN_SECRET,
			{ expiresIn: config.JWT_REFRESH_TOKEN_EXPIRES_IN }
		);

		user.token = refreshToken;
		user = await user.save();

		const loggedUser = await User.findById(user._id);
		res
			.cookie('refresh-token', refreshToken, {
				httpOnly: true,
				secure: true,
				sameSite: 'none',
			})
			.status(200)
			.json({ user: loggedUser, token: accessToken });
	} catch (error) {
		res.status(500).send(error);
	}
};

export const verifyAuth = async (req: Request, res: Response) => {
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
			return res.status(200).json(true);
		});
	} catch (error) {
		res.sendStatus(500);
	}
};

export const verifyRefreshToken = async (req: Request, res: Response) => {
	try {
		const refreshToken = req?.cookies['refresh-token'];
		if (!refreshToken || typeof refreshToken !== 'string')
			return res.sendStatus(401);

		const tokenUser = await User.findOne({ token: refreshToken });
		if (!tokenUser) return res.sendStatus(401);

		jwt.verify(
			refreshToken,
			config.JWT_REFRESH_TOKEN_SECRET,
			(error, decoded) => {
				if (
					error ||
					!decoded ||
					typeof decoded === 'string' ||
					tokenUser._id.toString() !== decoded.id
				) {
					return res.sendStatus(403);
				}
				const accessToken: string = jwt.sign(
					{ id: tokenUser._id },
					config.JWT_AUTH_TOKEN_SECRET,
					{ expiresIn: config.JWT_AUTH_TOKEN_EXPIRES_IN }
				);
				res.status(200).json({ user: tokenUser, token: accessToken });
			}
		);
	} catch (error) {
		res.status(500).send(error);
	}
};

export const handleLogout = async (req: Request, res: Response) => {
	try {
		const refreshToken = req?.cookies['refresh-token'];
		if (!refreshToken) return res.sendStatus(204);

		const user = await User.findOne({ token: refreshToken });
		if (!user) {
			return res
				.clearCookie('refresh-token', {
					httpOnly: true,
					secure: true,
					sameSite: 'none',
				})
				.sendStatus(204);
		}

		user.token = null;
		await user.save();

		return res
			.clearCookie('refresh-token', {
				httpOnly: true,
				secure: true,
				sameSite: 'none',
			})
			.sendStatus(200);
	} catch (error) {
		res.status(500).send(error);
	}
};
