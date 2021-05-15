import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
    theme: {
        colors: {
            ...colors,
            accent: colors.cyan,
        },
        fontFamily: {
            sans: ['Inter var', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
        },
    }
})