module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/components/Login.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
