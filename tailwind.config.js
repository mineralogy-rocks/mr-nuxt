const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: [],
    darkMode: false,
    theme: {
        colors: {
            ...colors
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
