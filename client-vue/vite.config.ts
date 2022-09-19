import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	console.log(process.cwd());
	const env = loadEnv(mode, process.cwd());
	const processEnvValues = {
		'process.env': Object.entries(env).reduce((prev, [key, val]) => {
			return {
				...prev,
				[key]: val,
			};
		}, {}),
	};
	return {
		plugins: [vue()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@images': path.resolve(__dirname, './src/assets/images'),
			},
		},
		envDir: process.cwd(),
		define: {
			'process.env': processEnvValues,
		},
		// envDir: process.cwd(),
		// define: {
		// 	__APP_ENV__: env.APP_ENV,
		// },
	};
});

// export default defineConfig({
// 	plugins: [vue()],
// 	resolve: {
// 		alias: {
// 			'@': path.resolve(__dirname, './src'),
// 			'@assets': path.resolve(__dirname, './src/assets'),
// 			'@images': path.resolve(__dirname, './src/assets/images'),
// 		},
// 	},
// 	envDir: __dirname,
// });
