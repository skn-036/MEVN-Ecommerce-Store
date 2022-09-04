<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import axios from '@/axios';
	import { AxiosResponse, AxiosError } from 'axios';
	import useAppConfig from '@/composables/app/useAppConfig';
	import * as yup from 'yup';
	import { runYupValidation } from '@/composables/validation/useYupValidation';

	interface RegistrationForm {
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
	}

	interface RegistrationFormError {
		name?: string;
		email?: string;
		password?: string;
		confirmPassword?: string;
	}

	const route = useRoute();
	const routeMeta = computed(() => route.meta);
	const router = useRouter();

	const { authUser, accessToken } = useAppConfig();

	const RegistrationSchema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().required().email(),
		password: yup
			.string()
			.oneOf([yup.ref('confirmPassword'), null], "Password doesn't match")
			.required()
			.min(8),
		confirmPassword: yup.string().nullable(),
	});

	const showPassword = ref<boolean>(false);

	const registrationForm = ref<RegistrationForm>({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const registrationFormError = ref<RegistrationFormError>({
		name: '',
		email: '',
		password: '',
	});

	const handleSubmit = async (): Promise<void> => {
		try {
			const validation = await runYupValidation(
				RegistrationSchema,
				registrationForm.value
			);
			const { validated, data, errors } = validation;
			if (!validated) {
				if (errors) registrationFormError.value = errors;
				return;
			}

			registrationFormError.value = { name: '', email: '', password: '' };
			if (!data) return;

			const response: AxiosResponse = await axios.post('/api/auth/register', {
				...data,
			});
			if (response.data && response.status === 201) {
				authUser.value = response.data.user;
				accessToken.value = response.data.token;

				if (routeMeta.value.redirectIfLoggedIn) router.push({ name: 'home' });
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				const err = error?.response?.data;
				if (
					parseInt(err?.code) === 11000 &&
					err?.keyPattern?.email === 1 &&
					err?.keyValue.email === registrationForm.value.email
				) {
					registrationFormError.value = {
						...registrationFormError.value,
						email: 'this email is already registered',
					};
				}
			}
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
					class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 hidden lg:block"
				>
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
						class="w-full"
						alt="Sample image"
					/>
				</div>

				<div
					class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 xs:w-10/12 w-11/12 m-auto lg:m-0"
				>
					<div class="mb-12 md:mb-0">
						<!-- user name input -->
						<div class="mb-6">
							<input
								v-model="registrationForm.name"
								type="text"
								class="form-input"
								placeholder="Name"
							/>
							<span
								v-if="registrationFormError?.name"
								class="mt-2 text-[13px] font-medium text-red-700"
							>
								{{ registrationFormError?.name }}
							</span>
						</div>

						<!-- Email input -->
						<div class="mb-6">
							<input
								v-model="registrationForm.email"
								type="email"
								class="form-input"
								placeholder="Email address"
							/>
							<span
								v-if="registrationFormError?.email"
								class="mt-2 text-[13px] font-medium text-red-700"
							>
								{{ registrationFormError?.email }}
							</span>
						</div>

						<!-- Password input -->
						<div class="mb-6">
							<div class="w-full relative">
								<input
									v-model="registrationForm.password"
									:type="showPassword ? 'text' : 'password'"
									class="form-input"
									placeholder="Password"
								/>
								<FeatherIcon
									:type="showPassword ? 'eye-off' : 'eye'"
									size="14"
									class="absolute top-1/2 left-[97%] -translate-x-[97%] -translate-y-1/2 cursor-pointer"
									@click="showPassword = !showPassword"
								/>
							</div>
							<span
								v-if="registrationFormError?.password"
								class="mt-2 text-[13px] font-medium text-red-700"
							>
								{{ registrationFormError?.password }}
							</span>
						</div>

						<!-- Confirm Password input -->
						<div class="mb-6">
							<div class="w-full relative">
								<input
									v-model="registrationForm.confirmPassword"
									:type="showPassword ? 'text' : 'password'"
									class="form-input"
									placeholder="Confirm password"
								/>
							</div>
						</div>

						<div class="flex flex-col lg:flex-row gap-4">
							<button
								class="button-violet w-full uppercase"
								@click="handleSubmit"
							>
								Register
							</button>
							<button class="button-violet w-full uppercase">
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
								<span>Google</span>
							</button>
						</div>

						<div class="text-center lg:text-left">
							<div
								class="text-sm font-semibold mt-3 flex justify-between flex-col lg:flex-row"
							>
								<p>
									Already have an account?
									<span
										class="text-blue-700 hover:text-violet active:text-violet transition duration-200 ease-in-out cursor-pointer mb-2 lg:mb-0"
										@click="$router.push({ name: 'login' })"
									>
										Login
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
