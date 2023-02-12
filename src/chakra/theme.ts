import { extendTheme } from '@chakra-ui/react'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { Button } from './button';

// theme.js
export const theme = extendTheme({
    color: {
        brand: {
            100: '#ff3c00',
        }
    },
    font: {
        body:'Open Sans,sans-serif'
    },
    styles: {
        global: () => ({
            body: {
                bg:'gray.200'
            }
        })
    },
    components: {
        Button: Button
    }
  });
  