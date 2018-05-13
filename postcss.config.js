module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint'),
      ]
    }),
    require('postcss-font-magician'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          flexbox: false
        }
      }
    }),
    require('postcss-extend'),
    require('css-mqpacker')
  ]
}