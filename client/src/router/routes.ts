import { RouteRecordRaw } from 'vue-router';
declare module 'vue-router' {
	interface RouteMeta {
		requiredAuth?: boolean;
		redirectIfLoggedIn?: boolean;
		screen?: 'full' | 'top-header';
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
		path: '/',
		name: 'home',
		component: () => import('@/pages/Home.vue'),
	},
	{
		path: '/shop',
		name: 'shop',
		component: () => import('@/pages/Shop.vue'),
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/pages/Blog.vue'),
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('@/pages/Contact.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/pages/About.vue'),
	},
];
export default routes;
