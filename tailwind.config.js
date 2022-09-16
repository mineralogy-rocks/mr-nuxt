const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            green: colors.green,
            red: colors.red,
            teal: colors.teal,
            pink: colors.pink,
            blue: colors.blue,
            purple: colors.purple,

            white: {
                DEFAULT: '#FFFFFF',
                hover: '#f9fafb',
            },

            secondary: {
                DEFAULT: '#F3F4F6',
                hover: '#E5E7EB',
            },
            ternary: {
                DEFAULT: '#F4F0F0',
            },
        },
        fontFamily: {
            sans: ["'Exo 2'", 'sans-serif'],
        },
        fontSize: {
            xxs: ['0.6rem', { lineHeight: '0.7rem' }],
            xs: ['0.75rem', { lineHeight: '0.75rem' }],
            sm: ['0.875rem', { lineHeight: '1rem' }],
            base: ['1rem', { lineHeight: '1.25rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '1.75rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '1' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineheight: '1' }],
            '9xl': ['8rem', { lineheight: '1' }],
        },
        extend: {
            // minHeight: {
            //     1.2: '1.2rem',
            //     3: '3rem',
            //     '1/2': '50%',
            // },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
