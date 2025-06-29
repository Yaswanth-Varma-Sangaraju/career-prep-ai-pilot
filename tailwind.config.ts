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
		fontFamily: {
			sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			playfair: ['Playfair Display', 'serif'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2563eb", // Modern blue
					foreground: "#ffffff",
					light: "#3b82f6",
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
				},
				secondary: {
					DEFAULT: "#f8fafc", // Clean light gray
					foreground: "#1e293b",
					50: "#f8fafc",
					100: "#f1f5f9",
					200: "#e2e8f0",
					300: "#cbd5e1",
					400: "#94a3b8",
					500: "#64748b",
					600: "#475569",
					700: "#334155",
					800: "#1e293b",
					900: "#0f172a",
				},
				background: {
					DEFAULT: "#ffffff", // Pure white background
					dark: "#0f172a",    // Rich dark slate for dark mode
				},
				sidebar: {
					DEFAULT: "#1e293b", // Modern slate for sidebar
					foreground: "#ffffff",
					border: "#334155",
				},
				accent: {
					DEFAULT: "#06b6d4", // Modern cyan accent
					foreground: "#ffffff",
					50: "#ecfeff",
					100: "#cffafe",
					200: "#a5f3fc",
					300: "#67e8f9",
					400: "#22d3ee",
					500: "#06b6d4",
					600: "#0891b2",
					700: "#0e7490",
					800: "#155e75",
					900: "#164e63",
				},
				muted: { 
					DEFAULT: "#f1f5f9", 
					foreground: "#64748b" 
				},
				border: "#e2e8f0",
				input: "#f1f5f9",
				ring: "#2563eb",
				destructive: {
					DEFAULT: "#ef4444",
					foreground: "#ffffff",
				},
				success: {
					DEFAULT: "#10b981",
					foreground: "#ffffff",
				},
				warning: {
					DEFAULT: "#f59e0b",
					foreground: "#ffffff",
				},
				card: {
					DEFAULT: "#ffffff",
					foreground: "#1e293b",
				},
				popover: {
					DEFAULT: "#ffffff",
					foreground: "#1e293b",
				},
			},
			transitionProperty: {
				'colors-bg': 'background-color, color, border-color, fill, stroke',
				'opacity': 'opacity',
			},
			transitionDuration: {
				DEFAULT: '300ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			animation: {
				'fade-in': 'fade-in 0.3s ease-out',
			},
			keyframes: {
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(12px)' },
					to:   { opacity: '1', transform: 'translateY(0)' }
				}
			},
			boxShadow: {
				'soft': '0 2px 8px 0 rgba(0, 0, 0, 0.05)',
				'medium': '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
				'large': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;