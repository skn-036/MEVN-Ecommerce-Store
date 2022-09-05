import { AppState } from '@/types/store/Store';
import { User } from '@/types/user/user';

const windowWidth: number = document.documentElement.clientWidth;

const state: AppState = {
	windowWidth,
	authUser: null,
	showMobileMenu: false,
};

const mutations = {
	updateWindowWidth: (state: AppState, payload: number) =>
		(state.windowWidth = payload),
	updateAuthUser: (state: AppState, payload: User | null) =>
		(state.authUser = payload),
	toggleMobileMenu: (state: AppState, payload: boolean) =>
		(state.showMobileMenu = payload),
};

export default { state, mutations };
