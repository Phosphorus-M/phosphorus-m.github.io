module.exports = {
  theme: {
    extend: {
      flexBasis: {
        "custom": "calc(100% - 40px)"
      },
      boxShadow: {
        'custom-shadow': '0px 0px 10px 0px #000000',
      },
    },
  },
  daisyui: {
    styled: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    themes: ["halloween",
      {
        custom: {
          ...require("daisyui/src/colors/themes")["[data-theme=halloween]"],
          "primary": "#ff0a16",
          "base-100": "#141414",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  content: [
    './themes/**/*.ejs',
    './themes/phosphorus/layout/**/*.ejs',
    './public/**/*.html',
  ]
}
