/// <reference types="vite/client" />
import VueRouter, { Route } from 'vue-router';

declare module '*.vue' {
	import type { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module 'vue/types/vue' {
	interface Vue {
		$router: VueRouter;
	}
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CLIENT_STRIPE_PUBLIC_KEY?: string;
			CLIENT_ENVIRONMENT?: string;
			CLIENT_APP_URL?: string;
		}
	}
}
