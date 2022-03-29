module.exports = {
    root: true,

    env: {
        node: true,
        browser: true,
    },

    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
    },

    extends: [
        'eslint:recommended',
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:vue/recommended',
        'plugin:prettier-vue/recommended',
        'prettier',
    ],
    plugins: ['prettier-vue'],

    settings: {
        'prettier-vue': {
            SFCBlocks: {
                template: false,
            },
        },
    },

    rules: {
        'prettier-vue/prettier': ['warn'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['Toolbar'],
            },
        ],
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
                switchCase: 0,
                ignores: [],
            },
        ],
        'vue/first-attribute-linebreak': [
            'warn',
            {
                singleline: 'ignore',
                multiline: 'beside',
            },
        ],
        'vue/max-attributes-per-line': [
            'warn',
            {
                singleline: 3,
                multiline: 1,
            },
        ],
        'vue/html-closing-bracket-newline': [
            'warn',
            {
                singleline: 'never',
                multiline: 'never',
            },
        ],
        'vue/html-indent': [
            'warn',
            4,
            {
                attribute: 2,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },

    globals: {
        $nuxt: true,
    },
};
