import { Request, Response } from 'express';
import config from '@src/config/config';

const stripe = require('stripe')(config.STRIPE_PRIVATE_KEY);
export const createStripePaymentIntent = async (
	req: Request,
	res: Response
) => {
	if (!stripe) res.status(500).send('stripe not initialized');

	try {
		const { amount, currency } = req.body;

		// Create a PaymentIntent with the order amount and currency
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency,
			automatic_payment_methods: {
				enabled: true,
			},
		});

		res.json({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		res.sendStatus(500);
	}
};
