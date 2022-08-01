module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            spacing: {
                '128': '100rem'
            }
    },
  plugins: [
      require("@tailwindcss/typography"),
      require('tw-elements/dist/plugin')
  ]

};
