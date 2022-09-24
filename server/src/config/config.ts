import env from 'dotenv';
env.config();

interface Config {
	ENVIRONMENT: string;
	APP_URL: string;
	PORT: string | number;
	MONGO_URI: string | undefined;
	JWT_AUTH_TOKEN_SECRET: string;
	JWT_REFRESH_TOKEN_SECRET: string;
	JWT_AUTH_TOKEN_EXPIRES_IN: string | number;
	JWT_REFRESH_TOKEN_EXPIRES_IN: string | number;
	ALLOWED_ORIGINS: string[];
	STRIPE_PRIVATE_KEY: string;
}

const config: Config = {
	ENVIRONMENT: process.env.ENVIRONMENT || 'local',
	APP_URL: process.env.APP_URL || 'localhost:5000',
	PORT: process.env.PORT || 5000,
	MONGO_URI: process.env.MONGO_URI,

	JWT_AUTH_TOKEN_SECRET:
		process.env.JWT_AUTH_TOKEN_SECRET ||
		'5089a489cc9af0312299f6a3160dc373ba2d9fd4eb61cab00bc3c5c591d6928b3a2900576fd0049ad01b7a3298569477ec6f215137ac6d84a96e504413f0c12d',

	JWT_REFRESH_TOKEN_SECRET:
		process.env.JWT_REFRESH_TOKEN_SECRET ||
		'40bc8468a39054585229b6e353061c1a47c0315222ca67be31f85be039d82043e77f8877f76d9a34ac1ceb697a959000ae1c1d6b62c2d2fe0914749a5f420d',

	JWT_AUTH_TOKEN_EXPIRES_IN: process.env.JWT_AUTH_TOKEN_EXPIRES_IN || '15m',
	JWT_REFRESH_TOKEN_EXPIRES_IN:
		process.env.JWT_REFRESH_TOKEN_EXPIRES_IN || '30d',

	ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS
		? process.env.ALLOWED_ORIGINS.split(',')
		: [
				'http://127.0.0.1:5173',
				'http://127.0.0.1:5000',
				'http://127.0.0.1:3000',
		  ],

	STRIPE_PRIVATE_KEY: process.env.STRIPE_PRIVATE_KEY || '',
};

export default config;
