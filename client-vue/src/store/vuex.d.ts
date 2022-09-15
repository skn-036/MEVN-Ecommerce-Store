import { Store } from 'vuex';
import State from '@/types/store/State';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
