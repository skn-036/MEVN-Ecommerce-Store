import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';
import useAppConfig from '@/composables/app/useAppConfig';
import useAuth from '@/composables/auth/useAuth';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const { accessToken, authUser } = useAppConfig();
const { verifyAuth, verifyRefreshToken, authExceptionRoutes } = useAuth();

router.beforeEach(async (to, from, next) => {
	if (to.name === from.name && to.params === from.params) {
		return next();
	}

	const userVerified = await verifyAuth();
	if (to.meta.requiredAuth) {
		if (!userVerified) {
			const refreshTokenVerified = await verifyRefreshToken();
			if (!refreshTokenVerified) return next({ name: 'login' });
			else return next();
		}
	}
	if (!to.meta.requiredAuth && to.meta.redirectIfLoggedIn) {
		if (userVerified) {
			return next({ name: 'home' });
		}
	}
	return next();
});

export default router;
