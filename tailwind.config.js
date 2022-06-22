module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {}
    },
  plugins: [
      require("@tailwindcss/typography"),
      require('tw-elements/dist/plugin')
  ]

};
