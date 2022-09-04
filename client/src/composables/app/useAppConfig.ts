import { computed, ref } from 'vue';
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
	 * authenticated user instance
	 * --------------------------------------------------------------
	 */
	const authUser = computed<User | null>({
		get: () => store.state.appState.authUser,
		set: value => {
			store.commit('updateAuthUser', value);
		},
	});

	/**
	 * --------------------------------------------------------------
	 * jwt access token
	 * --------------------------------------------------------------
	 */
	const accessToken = ref<string | null>(null);

	return {
		currentWindowWidth,
		setCurrentWindowWidth,
		authUser,
		accessToken,
	};
};

export default useAppConfig;
