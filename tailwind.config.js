module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
        '160': '40rem'
      },
      height:{
        '14': '3.5rem'
      },
      maxWidth:{
        '1.5xl': '38rem'
      },
      colors: {
        "bpc-navy": "#1E344C",
        "bpc-blue": "#1D5EB7",
        "bpc-light-gray": "#ecf3f7",
        "bpc-light-gray-lighter": "#e3e3e3"
      },
      fontFamily: {
        sans: [
          "Messina",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        sansBold: [
          "Messina Bold",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
        mono: ["Menlo", "Monaco", "Consolas", '"Liberation Mono"', '"Courier New"', "monospace"]
      },
      borderRadius: {
        bpc: "6px"
      },
      boxShadow: {
        bpc: "0 3px 4px 0 rgba(0, 0, 0, 0.27)"
      }
    }
  },
  variants: {},
  plugins: []
};
