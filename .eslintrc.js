module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'prettier',
        '@vue/prettier',
    ],
    plugins: ['prettier', 'vue'],
    rules: {
        'prettier/prettier': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 0,
                ignores: [],
            },
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 3,
                multiline: {
                    max: 1,
                },
            },
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,
    },
    overrides: [
        {
            files: ['./**/*.vue'],
            parser: require.resolve('vue-eslint-parser'),
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
    ],
};
