import { User } from '@/types/user/user';

export interface AppState {
	windowWidth: number;
	authUser: User | null;
	accessToken: string | null;
}

export interface StoreState {
	appState: AppState;
}
