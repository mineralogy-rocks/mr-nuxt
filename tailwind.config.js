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
            white: colors.white,
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
        },
        fontFamily: {
            sans: ["'Exo 2'", 'sans-serif'],
        },
        extend: {
            minHeight: {
                1.2: '1.2rem',
                3: '3rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
