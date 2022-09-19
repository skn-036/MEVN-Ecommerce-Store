import { RouteRecordRaw } from 'vue-router';
declare module 'vue-router' {
	interface RouteMeta {
		requiredAuth?: boolean;
		redirectIfLoggedIn?: boolean;
		screen: 'full' | 'top-header';
	}
}

const routes: RouteRecordRaw[] = [
	// auth routes
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/Login.vue'),
		meta: {
			redirectIfLoggedIn: true,
			screen: 'full',
		},
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/pages/Register.vue'),
		meta: {
			redirectIfLoggedIn: true,
			screen: 'full',
		},
	},

	// pages
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/Home.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
	{
		path: '/shop',
		name: 'shop',
		component: () => import('@/pages/Shop.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/pages/Blog.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('@/pages/Contact.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/pages/About.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
	{
		path: '/cart',
		name: 'cart',
		component: () => import('@/pages/Cart.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: () => import('@/pages/Checkout.vue'),
		meta: {
			requiredAuth: true,
			screen: 'top-header',
		},
	},
];
export default routes;
