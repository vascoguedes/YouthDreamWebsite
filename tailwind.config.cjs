/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  blueLixoNao: {
				DEFAULT: "#0d65bc",
				light: "#5ca7f1",
				dark: "#0a4177",
			  },
			},
		  },
	},
	plugins: [],
}
