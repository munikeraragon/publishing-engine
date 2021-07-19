module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
    extends: ['plugin:react/recommended', 'standard', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }]
    },
    overrides: [
        // This configuration will apply only to TypeScript files
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: { react: { version: 'detect' } },
            env: {
                browser: true,
                node: true,
                es6: true
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended', // TypeScript rules
                'plugin:react/recommended', // React rules
                'plugin:react-hooks/recommended', // React hooks rules
                'plugin:jsx-a11y/recommended', // Accessibility rules
                'plugin:prettier/recommended' // Prettier plugin
            ],
            rules: {
                'no-use-before-define': [0],
                '@typescript-eslint/no-use-before-define': [1],

                // We will use TypeScript's types for component props instead
                'react/prop-types': 'off',

                // No need to import React when using Next.js
                'react/react-in-jsx-scope': 'off',

                // This rule is not compatible with Next.js's <Link /> components
                'jsx-a11y/anchor-is-valid': 'off',

                // Why would you want unused vars?
                '@typescript-eslint/no-unused-vars': ['error'],

                'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules

                // I suggest this setting for requiring return types on functions only where useful
                '@typescript-eslint/explicit-function-return-type': [
                    'warn',
                    {
                        allowExpressions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true
                    }
                ]
            }
        }
    ]
};
