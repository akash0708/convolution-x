import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        darkBlue: "#00092B",
        softPurple:"#48279A",
      },
      backgroundImage: {
        'radial-darkBlue-to-purple': 'radial-gradient(circle, #48279A 0%, #00092B 40%)',
        'aboutBg':"url('/aboutusBg.png')",
        'aboutGradient':'linear-gradient(10deg, rgba(72, 39, 154, 0.6) 0%, #1A0F52 36%, #00092B 100%)'
      },
      boxShadow: {
        'shadowAbout': '4px 4px 75px 17px rgba(72, 39, 154, 1)', // Using the specified color and values
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Spins in 10 seconds clockwise
        'spin-slow-ccw': 'spinReverse 20s linear infinite', // Spins counterclockwise in 10 seconds
        'float': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-faster': 'floatFaster 1s ease-in-out infinite',
        'twinkle': 'twinkle 5s infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': {
            opacity: '0.5', // Starts with lower opacity
          },
          '50%': {
            opacity: '1', // Full opacity for twinkle
         
          },
        },
        spinReverse: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)', // Negative rotation for counterclockwise
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)', // Start and end at the same position
          },
          '50%': {
            transform: 'translateY(-10px)', // Move upward at the middle of the animation
          },
        },
        floatFaster: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)', // Larger movement for faster float
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
