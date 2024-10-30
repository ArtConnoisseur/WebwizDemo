/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				bg: 'hsl(var(--background))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					fg: 'hsl(var(--on-primary))',
				},
				text: 'hsl(var(--text))',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					fg: 'hsl(var(--on-secondary))',
				}
			}
		}
	},

	plugins: []
};
