import { computed } from '@vue/reactivity';
import { store } from '@/store';
import { User } from '@/types/user/user';

const useAppConfig = () => {
	/**
	 * --------------------------------------------------------------
	 * store current window width as a store state
	 * --------------------------------------------------------------
	 */
	const currentWindowWidth = computed<number>({
		get: () => store.state.appState.windowWidth,
		set: (value: number) => {
			store.commit('updateWindowWidth', value);
		},
	});
	const setCurrentWindowWidth = (): void => {
		currentWindowWidth.value = document.documentElement.clientWidth;
	};

	/**
	 * --------------------------------------------------------------
	 * store current window width as a store state
	 * --------------------------------------------------------------
	 */
	const authUser = computed<User | null>({
		get: () => store.state.appState.authUser,
		set: value => {
			store.commit('updateAuthUser', value);
		},
	});

	const accessToken = computed<string | null>({
		get: () => store.state.appState.accessToken,
		set: value => {
			store.commit('updateAccessToken', value);
		},
	});

	return {
		currentWindowWidth,
		setCurrentWindowWidth,
		authUser,
		accessToken,
	};
};

export default useAppConfig;
