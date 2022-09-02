import express, { Router } from 'express';
const router: Router = express.Router();

import {
	handleRegister,
	handleLogin,
	verifyAuth,
	verifyRefreshToken,
} from '@src/controllers/auth/auth.controller';

// register
router.post('/register', handleRegister);

// login
router.post('/login', handleLogin);

//verify auth
router.get('/verify', verifyAuth);

//verify refresh token
router.get('/verify/refresh-token', verifyRefreshToken);

export default router;
