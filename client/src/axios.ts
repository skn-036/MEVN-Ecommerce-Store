import axios, { AxiosInstance } from 'axios';
const apiClient: AxiosInstance = axios.create({
	baseURL: 'http://localhost:5000',
	headers: {
		'Content-type': 'application/json',
	},
	withCredentials: true,
});
apiClient.defaults.withCredentials = true;
export default apiClient;
