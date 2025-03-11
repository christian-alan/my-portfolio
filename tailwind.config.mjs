/** @type {import('tailwindcss').Config} */


export default {
    darkMode: ['class','[data-theme=light]'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	screens: {
    		tablet: '960px',
    		smalldesktop: '1248px',
    		desktop: '1640px',
    		mobile: '360px'
    	},
    	fontSize: {
    		title1: [
    			'76px',
    			{
    				lineHeight: '86px',
    				letterSpacing: '-2%'
    			}
    		],
    		title2: [
    			'64px',
    			{
    				lineHeight: '72px',
    				letterSpacing: '-5%'
    			}
    		],
    		title3: [
    			'36px',
    			{
    				lineHeight: '48px',
    				letterSpacing: '-3%'
    			}
    		],
    		title4: [
    			'24px',
    			{
    				lineHeight: '38px',
    				letterSpacing: '0%'
    			}
    		],
    		subtitle1: [
    			'24px',
    			{
    				lineHeight: '30px',
    				letterSpacing: '-0%'
    			}
    		],
    		headline1: [
    			'44px',
    			{
    				lineHeight: '57px',
    				letterSpacing: '0%'
    			}
    		],
    		subheadline1: [
    			'32px',
    			{
    				lineHeight: '44px',
    				letterSpacing: '0%'
    			}
    		],
    		body1: [
    			'18px',
    			{
    				lineHeight: '26px',
    				letterSpacing: '-2%'
    			}
    		],
    		body2: [
    			'16px',
    			{
    				lineHeight: '24px',
    				letterSpacing: '-2%'
    			}
    		],
    		caption1: [
    			'14px',
    			{
    				lineHeight: '17px',
    				letterSpacing: '-2%'
    			}
    		],
    		caption2: [
    			'12px',
    			{
    				lineHeight: '14px',
    				letterSpacing: '-2%'
    			}
    		]
    	},
    	fontFamily: {
    		DM: [
    			'DM Sans',
    			'serif'
    		],
    		playfair: [
    			'Playfair Display',
    			'serif'
    		]
    	},
    	colors: {
    		pink: '#F8A67B',
    		gold: '#EBB965',
    		skin: '#D4ADB2',
    		orange: '#F8A67B',
    		dark: '#141414',
    		teal: '#61859A',
    		light: '#FBF8F4',
    		white: '#FFFFFF',
    		gray: '#595453',
    		black: '#000000',
			'skills-bg':'hsl(var(--color-skills-bg)/<alpha-value>)',
    		bkg: 'hsl(var(--color-bg)/<alpha-value>)',
    		'theme-btn': 'hsl(var(--color-theme-btn)/<alpha-value>)',
    		'theme-text': 'hsl(var(--color-theme-text)/<alpha-value>)'
    	},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			'color-1': 'hsl(var(--color-1))',
    			'color-2': 'hsl(var(--color-2))',
    			'color-3': 'hsl(var(--color-3))',
    			'color-4': 'hsl(var(--color-4))',
    			'color-5': 'hsl(var(--color-5))'
    		},
    		animation: {
    			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
    			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
    			meteor: 'meteor 5s linear infinite',
    			rainbow: 'rainbow var(--speed, 2s) infinite linear'
    		},
    		keyframes: {
    			'shimmer-slide': {
    				to: {
    					transform: 'translate(calc(100cqw - 100%), 0)'
    				}
    			},
    			'spin-around': {
    				'0%': {
    					transform: 'translateZ(0) rotate(0)'
    				},
    				'15%, 35%': {
    					transform: 'translateZ(0) rotate(90deg)'
    				},
    				'65%, 85%': {
    					transform: 'translateZ(0) rotate(270deg)'
    				},
    				'100%': {
    					transform: 'translateZ(0) rotate(360deg)'
    				}
    			},
    			meteor: {
    				'0%': {
    					transform: 'rotate(var(--angle)) translateX(0)',
    					opacity: '1'
    				},
    				'70%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'rotate(var(--angle)) translateX(-500px)',
    					opacity: '0'
    				}
    			},
    			rainbow: {
    				'0%': {
    					'background-position': '0%'
    				},
    				'100%': {
    					'background-position': '200%'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}

