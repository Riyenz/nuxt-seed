module.exports = {
  content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system'],
        ubuntu: ['Ubuntu', 'ui-sans-serif', 'system-ui', '-apple-system'],
        opensans: ['Open Sans', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      backgroundImage: {
        pattern: 'url(/assets/images/background.svg)',
      },
    },
  },
}
