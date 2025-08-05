// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // 🟢 This tells Tailwind to scan your React files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0f2f26',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
