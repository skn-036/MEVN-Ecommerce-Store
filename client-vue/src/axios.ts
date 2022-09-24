import axios, { AxiosInstance } from 'axios';
const environment: string | undefined = process.env.CLIENT_ENVIRONMENT;
const url: string | undefined = process.env.CLIENT_APP_URL;

const apiClient: AxiosInstance = axios.create({
	baseURL:
		environment && environment === 'production' && url
			? url
			: 'http://localhost:5000',
	headers: {
		'Content-type': 'application/json',
	},
	withCredentials: true,
});
apiClient.defaults.withCredentials = true;
export default apiClient;
