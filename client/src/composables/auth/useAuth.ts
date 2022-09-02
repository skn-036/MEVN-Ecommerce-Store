import axios from '@/axios';
import { AxiosResponse } from 'axios';
import useAppConfig from '@/composables/app/useAppConfig';

const useAuth = () => {
	const { accessToken, authUser } = useAppConfig();

	const verifyAuth = async (): Promise<boolean> => {
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

	const authExceptionRoutes: string[] = ['login'];

	return {
		verifyAuth,
		verifyRefreshToken,
		authExceptionRoutes,
	};
};

export default useAuth;
