import { InjectionKey } from 'vue';
import { Store, createStore, useStore as useRootStore } from 'vuex';
import { StoreState } from '@/types/store/Store';
import appState from '@/store/app-state';

export const key: InjectionKey<Store<StoreState>> = Symbol();

export const store = createStore<StoreState>({
	modules: {
		appState,
	},
});

export const useStore = () => {
	return useRootStore(key);
};
