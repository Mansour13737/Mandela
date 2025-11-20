/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'ui-serif', 'serif'],
        display: ['var(--font-display)', 'ui-serif', 'serif'],

        // ⭐ فونت اصلی سایت (BYekan)
        byekan: ["var(--font-byekan)"],
      },
    },
  },
  plugins: [],
};
