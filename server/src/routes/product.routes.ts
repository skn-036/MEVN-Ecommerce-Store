import express, { Router } from 'express';
const router: Router = express.Router();

router.route('/').get((req, res) => {
	console.log('hello world');
	res.json('hellooooooooooooo !!!');
});

export default router;
