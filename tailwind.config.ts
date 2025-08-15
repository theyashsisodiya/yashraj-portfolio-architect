import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
					'50%': { transform: 'translateY(-20px) rotateX(10deg)' }
				},
				'spin-3d': {
					'0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
					'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(195, 100%, 50%)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(195, 100%, 50%), 0 0 60px hsl(285, 100%, 65%)',
						transform: 'scale(1.05)'
					}
				},
				'neural-flow': {
					'0%': { 
						backgroundPosition: '0% 50%',
						transform: 'rotate(0deg)'
					},
					'50%': { 
						backgroundPosition: '100% 50%',
						transform: 'rotate(180deg)'
					},
					'100%': { 
						backgroundPosition: '0% 50%',
						transform: 'rotate(360deg)'
					}
				},
				'hologram': {
					'0%': { 
						opacity: '0.8',
						transform: 'translateZ(0) rotateY(0deg)'
					},
					'50%': { 
						opacity: '1',
						transform: 'translateZ(10px) rotateY(180deg)'
					},
					'100%': { 
						opacity: '0.8',
						transform: 'translateZ(0) rotateY(360deg)'
					}
				},
				'slide-in-3d': {
					'0%': {
						transform: 'translateX(-100%) rotateY(-90deg)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0) rotateY(0deg)',
						opacity: '1'
					}
				},
				'cyber-glitch': {
					'0%, 100%': {
						transform: 'translateX(0)',
						filter: 'hue-rotate(0deg)'
					},
					'20%': {
						transform: 'translateX(-2px)',
						filter: 'hue-rotate(90deg)'
					},
					'40%': {
						transform: 'translateX(2px)',
						filter: 'hue-rotate(180deg)'
					},
					'60%': {
						transform: 'translateX(-1px)',
						filter: 'hue-rotate(270deg)'
					},
					'80%': {
						transform: 'translateX(1px)',
						filter: 'hue-rotate(360deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'spin-3d': 'spin-3d 20s linear infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'neural-flow': 'neural-flow 15s ease-in-out infinite',
				'hologram': 'hologram 8s ease-in-out infinite',
				'slide-in-3d': 'slide-in-3d 1s ease-out',
				'cyber-glitch': 'cyber-glitch 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
