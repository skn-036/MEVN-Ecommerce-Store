import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig(() => {
	// load env from app root
	const env = dotenv.config({ path: path.join(process.env.INIT_CWD, '.env') });
	// filter the env vars starts with 'CLIENT_'
	const clientEnv = Object.entries(env.parsed)
		.filter(([key, _]) => key.startsWith('CLIENT_'))
		.reduce((clientEnv, [key, value]) => ({ ...clientEnv, [key]: value }), {});

	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@images': path.resolve(__dirname, './src/assets/images'),
			},
		},
		define: {
			'process.env': clientEnv,
		},
		build: {
			outDir: '../server/dist-vue',
		},
	};
});

// basic config
// export default defineConfig({
// 	plugins: [vue()],
// 	resolve: {
// 		alias: {
// 			'@': path.resolve(__dirname, './src'),
// 			'@assets': path.resolve(__dirname, './src/assets'),
// 			'@images': path.resolve(__dirname, './src/assets/images'),
// 		},
// 	},
// });
