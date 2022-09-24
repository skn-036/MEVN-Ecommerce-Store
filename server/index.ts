import express, { Express, Request, Response } from 'express';
import config from '@src/config/config';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { setCorsCredentials } from '@src/middlewares/cors/credentials';
import { corsOptions } from '@src/config/cors';
import { logger } from '@src/utils/log/logger';
import { connectDB } from '@src/config/database';
import verifyAuthentication from '@src/middlewares/auth/verifyAuthentication';

import authRoutes from '@src/routes/auth.routes';
import productRoutes from '@src/routes/product.routes';
import checkoutRoutes from '@src/routes/checkout.routes';

const app: Express = express();
connectDB();

app.use(helmet());
app.use(setCorsCredentials);
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

if (config.ENVIRONMENT === 'production') {
	app.use(express.static('./dist-vue'));
}

// routes do not required authentication
// auth routes
app.use('/api/auth', authRoutes);

// checkout
app.use('/api/checkout', checkoutRoutes);

// auth middleware
app.use(verifyAuthentication);

// auth protected routes
app.use('/api/products', productRoutes);

app.listen(config.PORT, () => {
	logger.info(`server is running on port ${config.PORT}`);
});

app.get('*', (req: Request, res: Response) => {
	res.sendFile('./dist-vue/index.html');
});
