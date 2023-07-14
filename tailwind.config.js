// import { config } from './lib/server/config'
// import * as config from '@/lib/config'
import { FONTS_SANS, FONTS_SERIF } from './consts'

export default {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        day: {
          // DEFAULT: config.lightBackground || '#ffffff'
          DEFAULT: '#ffffff'
        },
        night: {
          // DEFAULT: config.darkBackground || '#111827'
          DEFAULT: '#111827'
        }
      },
      fontFamily: {
        sans: FONTS_SANS,
        serif: FONTS_SERIF,
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
