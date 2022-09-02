import config from '@src/config/config';
import mongoose from 'mongoose';
import { logger } from '@src/utils/log/logger';

export const connectDB = async (): Promise<void> => {
	try {
		const URI: string | undefined = config.MONGO_URI;
		if (!URI) throw new Error('MongoDB uri not found');

		const db = await mongoose.connect(URI);

		if (db) logger.info('connection to database established');
		else throw new Error('Something went wrong on server during DB connection');
	} catch (error) {
		logger.error(error);
	}
};
