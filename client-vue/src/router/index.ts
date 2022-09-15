import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';
import useAuth from '@/composables/auth/useAuth';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const { verifyAccessToken, verifyRefreshToken } = useAuth();

router.beforeEach(async (to, from, next) => {
	if (to.name === from.name && to.params === from.params) {
		return next();
	}

	let userVerified = await verifyAccessToken();
	if (!userVerified) userVerified = await verifyRefreshToken();

	if (to.meta.requiredAuth && !userVerified) return next({ name: 'login' });
	if (to.meta.redirectIfLoggedIn && userVerified) return next({ name: 'home' });
	return next();
});

export default router;
