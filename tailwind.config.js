/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			black: "#1D1D1B",
			darkgrey: "#42423D",
			mediumgrey: "#A5A5A5",
			grey: "#E4E4E7",
			lightgrey: "#F4F4F4",
			red: "#EB5E5D",
			pink: "#F29A99",
			white: "#FFF",
			sand: "#f6f4ec",
		},
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			cards: "813px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			boxShadow: {
				top: "0px -3px 20px rgba(0, 0, 0, 0.2)",
			},
		},
	},
	plugins: [],
};
