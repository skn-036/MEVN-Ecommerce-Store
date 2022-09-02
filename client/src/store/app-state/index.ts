import { AppState } from '@/types/store/Store';
import { User } from '@/types/user/user';

const windowWidth: number = document.documentElement.clientWidth;

const state: AppState = {
	windowWidth,
	authUser: null,
	accessToken: null,
};

const mutations = {
	updateWindowWidth: (state: AppState, payload: number) =>
		(state.windowWidth = payload),
	updateAuthUser: (state: AppState, payload: User | null) =>
		(state.authUser = payload),
	updateAccessToken: (state: AppState, payload: string | null) =>
		(state.accessToken = payload),
};

export default { state, mutations };
