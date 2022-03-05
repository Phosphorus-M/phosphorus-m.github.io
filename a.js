module.exports = {
    from: undefined,
    to: './themes/phosphorus/source/css/',
    plugins: {
      'postcss-import': {},
      'tailwindcss': {},
      'autoprefixer': {
        "overrideBrowserslist": ['last 4 version']
      },
    }
  }