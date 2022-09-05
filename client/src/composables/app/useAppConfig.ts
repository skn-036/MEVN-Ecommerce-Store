import { computed, ref, watch } from 'vue';
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

	/**
	 * --------------------------------------------------------------
	 * mobile menu visibility state
	 * --------------------------------------------------------------
	 */
	const showMobileMenu = computed<boolean>({
		get: () => store.state.appState.showMobileMenu,
		set: val => store.commit('toggleMobileMenu', val),
	});

	watch(
		() => currentWindowWidth.value,
		() => {
			if (currentWindowWidth.value > 992) toggleMobileMenu(false);
		}
	);

	/**
	 * --------------------------------------------------------------
	 * toggle mobile menu visibility state
	 * --------------------------------------------------------------
	 */
	const toggleMobileMenu = (show: boolean = false): void => {
		showMobileMenu.value = show;
	};

	return {
		currentWindowWidth,
		setCurrentWindowWidth,
		authUser,
		accessToken,
		showMobileMenu,
		toggleMobileMenu,
	};
};

export default useAppConfig;
