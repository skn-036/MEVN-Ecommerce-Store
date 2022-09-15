import { createApp } from 'vue';
import App from './App.vue';
import '@/style.css';
import '@/assets/css/transition.css';
import { store, key } from '@/store';
import router from '@/router';

// font awesome
import '@/utils/icons/faIcons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// feather icon
import VueFeather from 'vue-feather';

const app = createApp(App);
app
	.use(store, key)
	.use(router)
	.component('FaIcon', FontAwesomeIcon)
	.component('FeatherIcon', VueFeather)
	.mount('#app');
