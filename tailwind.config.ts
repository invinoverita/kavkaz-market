const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      "primary": "#179C49",
      "primary-hover": "#1B8A45",
      "black": "#1D1D1B",
      "white": "#FFFFFF",
      "grey": "#8B8C95",
      "light-text": "#8B8C95",
      "light": "#F3F3F3",
      "light-second": "#F8F8F8",
      "mark-new": "#3385FF",
      "mark-hit": "#FF4E51",
      "stroke": "#E3E4E7",
      "error": "#F4221A",
      "slider": "linear-gradient(180deg, #F3EDEF 0%, #E3DDDF 100%)"
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
      backgroundImage: {
        "slide-bg": "url(../../public/images/slideBg.png)",
        "payment": "url(../../public/images/payment.jpg)",
        "delivery": "url(../../public/images/delivery.jpg)",
        "sertificates": "url(../../public/images/sertificates.jpg)",
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/forms')],
};
