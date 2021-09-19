module.exports = {
  mode: 'jit',
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
  variants: {
    opacity: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
  },
}
