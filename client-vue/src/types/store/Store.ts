import { User } from '@/types/user/user';

export interface AppState {
	windowWidth: number;
	authUser: User | null;
	showMobileMenu: boolean;
}

export interface StoreState {
	appState: AppState;
}
