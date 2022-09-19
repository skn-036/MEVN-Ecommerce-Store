import { Store } from 'vuex';
import { StoreState } from '@/types/store/Store';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<StoreState>;
	}
}
