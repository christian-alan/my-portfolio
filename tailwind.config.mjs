/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', '[data-mode="dark"]'],
	theme: {
		screens:{
			tablet:'960px',
			smalldesktop:'1248px',
			desktop:'1640px',
			mobile:'360px'
		},
		fontSize:{
			xs:['12px',{lineHeight:'15px'}],
			sm:['14px',{lineHeight:'18px'}],
			lg:['16px',{lineHeight:'24px'}],
			xl:['18px',{lineHeight:'30px'}],
			'2xl':['24px',{lineHeight:'32px'}],
			'3xl':['32px',{lineHeight:'42px'}],
			'3.5xl':['64px',{lineHeight:'72px',letterSpacing:'-0.05em'}],
			'4xl':['72px',{lineHeight:'80px',letterSpacing:'-0.05em'}],
			'5xl':['82px',{lineHeight:'90px',letterSpacing:'-0.05em'}],
			'6xl':['96px',{lineHeight:'112px',letterSpacing:'-0.05em'}]
		},
		fontFamily:{
			'raleway': ['"Raleway", sans-serif'],
      		'playfair': ['"Playfair Display", sans-serif'],
		},
		colors:{
			purple:'#C463A7',
			orange:'#ED6D60',
			yellow:'#EBBA65',
			dark:'#2F3039',
			skin:'#D4ADB2',
			teal:'#7EB9CF',
			bleå:"#2335F5",
			light:"#FEFDFB",
			"light-green":"#F4FBF4",
			"black-mode":"#171717"
		},

		extend: {},
	},
	plugins: [],
}

