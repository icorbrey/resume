/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			display: ['"Afacad Flux"', 'sans-serif'],
		},
		colors: {
			green: {
				300: "#39424b",
				400: "#56817a",
			}
		},
		extend: {},
	},
	plugins: [],
}
