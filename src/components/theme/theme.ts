import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  breakpoints: {
    '2xl': '96em', // ~1536px
    base: '0em', // 0px
    lg: '1024px',
    md: '600px',
    sm: '30em', //480px
    xl: '80em', // ~1280px
  },
  colors: {},
  components: {},
  styles: {
    global: {
      body: { fontFamily: 'sans-serif' },
    },
  },
})

export default theme
