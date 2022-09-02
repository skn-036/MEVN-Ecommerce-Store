import { CorsOptions } from 'cors';
import config from '@src/config/config';

export const corsOptions: CorsOptions = {
	origin: (requestOrigin, callback) => {
		if (config.ENVIRONMENT === 'local' && !requestOrigin) {
			callback(null, true);
		} else if (!requestOrigin) {
			callback(new Error('origin header not present in the request'));
		} else if (config.ALLOWED_ORIGINS.includes(requestOrigin)) {
			callback(null, true);
		} else callback(new Error('cors error'));
	},
	optionsSuccessStatus: 200,
};
