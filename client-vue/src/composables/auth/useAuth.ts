import { computed } from 'vue';
import axios from '@/axios';
import { AxiosResponse } from 'axios';
import useAppConfig from '@/composables/app/useAppConfig';
import { useRoute } from 'vue-router';

const useAuth = () => {
	const { accessToken, authUser } = useAppConfig();

	/**
	 * --------------------------------------------------------------------------------
	 * verifies the jwt accessToken
	 * --------------------------------------------------------------------------------
	 */
	const verifyAccessToken = async (): Promise<boolean> => {
		try {
			if (!accessToken.value) return false;
			const response: AxiosResponse = await axios.get('/api/auth/verify', {
				headers: {
					Authorization: `Bearer ${accessToken.value}`,
				},
			});

			if (response.data && response.status === 200) return true;
			return false;
		} catch (error) {
			return false;
		}
	};

	/**
	 * --------------------------------------------------------------------------------
	 * verifies the jwt refresh token and updates the accessToken, auth user
	 * instance if necessary
	 * --------------------------------------------------------------------------------
	 */
	const verifyRefreshToken = async (): Promise<boolean> => {
		try {
			const response = await axios.get('/api/auth/verify/refresh-token');
			if (response.data && response.status === 200) {
				accessToken.value = response.data.token;
				authUser.value = response.data.user;
				return true;
			} else {
				accessToken.value = null;
				authUser.value = null;
				return false;
			}
		} catch (error) {
			accessToken.value = null;
			authUser.value = null;
			return false;
		}
	};

	/**
	 * --------------------------------------------------------------------------------
	 * checks if the user is authenticated in the required auth routes
	 * --------------------------------------------------------------------------------
	 */
	const isUserLoggedInAuthRequiredRoutes = (): boolean => {
		const route = computed(() => useRoute());
		if (!route.value.meta?.requiredAuth) return true;
		return Boolean(authUser.value);
	};

	return {
		verifyAccessToken,
		verifyRefreshToken,
		isUserLoggedInAuthRequiredRoutes,
	};
};

export default useAuth;
