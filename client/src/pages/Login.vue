<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import axios from '@/axios';
	import { AxiosResponse } from 'axios';
	import useAppConfig from '@/composables/app/useAppConfig';

	const route = useRoute();
	const meta = computed(() => route.meta);
	const router = useRouter();

	const { authUser, accessToken } = useAppConfig();

	const formData = ref<{ email: string; password: string }>({
		email: '',
		password: '',
	});

	const handleSubmit = async () => {
		// console.log(route.value, route.value.meta.redirectIfLoggedIn);
		try {
			console.log(meta.value);
			const response: AxiosResponse = await axios.post('/api/auth/login', {
				...formData.value,
			});
			if (response.data && response.status === 200) {
				authUser.value = response.data.user;
				accessToken.value = response.data.token;
				if (meta.value.redirectIfLoggedIn) router.push({ name: 'home' });
			}
		} catch (error) {
			authUser.value = null;
			accessToken.value = null;
		}
	};
</script>

<template>
	<section class="h-screen">
		<div class="px-6 h-full text-gray-800">
			<div
				class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
			>
				<!-- image -->
				<div
					class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
				>
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
						class="w-full"
						alt="Sample image"
					/>
				</div>

				<!-- form -->
				<div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
					<!-- Email input -->
					<div class="mb-6">
						<input
							v-model="formData.email"
							type="email"
							class="form-input"
							placeholder="Email address"
						/>
					</div>

					<!-- Password input -->
					<div class="mb-6">
						<input
							v-model="formData.password"
							type="password"
							class="form-input"
							placeholder="Password"
						/>
					</div>

					<div class="text-center lg:text-left">
						<button
							class="button-violet w-full uppercase"
							@click="handleSubmit"
						>
							Login
						</button>
						<button class="button-violet w-full uppercase mt-3">
							<svg
								class="mr-2 -ml-1 w-4 h-4 my-auto"
								aria-hidden="true"
								focusable="false"
								data-prefix="fab"
								data-icon="google"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 488 512"
							>
								<path
									fill="currentColor"
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								></path>
							</svg>
							<span>Login with google</span>
						</button>
						<div class="text-sm font-semibold mt-3 flex justify-between">
							<p>
								Don't have an account?
								<span
									class="text-blue-700 hover:text-violet active:text-violet transition duration-200 ease-in-out cursor-pointer"
								>
									Register
								</span>
							</p>
							<span
								class="text-gray-800 hover:text-violet active:text-violet transition duration-200 ease-in-out cursor-pointer"
							>
								Forgot password?
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
