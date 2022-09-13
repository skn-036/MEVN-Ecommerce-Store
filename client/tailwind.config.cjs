const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: '470px',
			...defaultTheme.screens,
		},
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				josefin: ['Josefin Sans', 'sans-serif'],
			},
			colors: {
				violet: '#7E33E0',
				accent: '#FB2E86',
				navy: '#1A0B5B',
				medium: '#72718F',
				'accent-hover': '#e71c74',
				'violet-hover': '#6d1dd6',
			},
		},
	},
	plugins: [],
};
