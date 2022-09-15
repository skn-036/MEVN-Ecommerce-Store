import { RouteLocationNamedRaw } from 'vue-router';

interface SlideWithButton {
	imagePath: string;
	button: true;
	buttonProps: {
		title: string;
		background?: string;
		color?: string;
		hoverBackground?: string;
	};
	route: RouteLocationNamedRaw;
}

interface SlideWithoutButton {
	imagePath: string;
	button?: false | undefined;
	route?: any;
}

export type Slide = SlideWithButton | SlideWithoutButton;
