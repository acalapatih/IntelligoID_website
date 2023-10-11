/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jc': "url(" + '/src/assets/bg-jobConnector.jpeg' + ")"
      }
    }
  },
  plugins: [],
}
