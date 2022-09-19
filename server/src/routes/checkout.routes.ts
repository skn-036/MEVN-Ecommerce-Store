/**
 * -------------------------------------------------------------------------------
 * route prefix /api/checkout
 * not require authentication
 * -------------------------------------------------------------------------------
 */
import express, { Router } from 'express';
const router: Router = express.Router();
import { createStripePaymentIntent } from '@src/controllers/checkout/stripe/payment-intent.controller';

router.post('/create-stripe-intent', createStripePaymentIntent);

export default router;
