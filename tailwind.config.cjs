/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'InterBold':'InterBold',
				'InterExtraBold':'InterExtraBold',
				'InterRegular':'InterRegular'
			},
			colors:{
				'softOrange':'hsl(35, 77%, 62%)',
				'softRed':'hsl(5, 85%, 63%)',
				'offWhite':'hsl(36, 100%, 99%)',
				'greyBlue':'hsl(233, 8%, 79%)',
				'darkGreyBlue':'hsl(236, 13%, 42%)',
				'veryDarkBlue':'hsl(240, 100%, 5%)'
			}
		},
	},
	plugins: [],
}
