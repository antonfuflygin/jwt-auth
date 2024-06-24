module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'prettier/prettier': ['error', {}, {
            'usePrettierrc': true,
        }],
        'import/order': [
            'error',
            {
                'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
                'pathGroups': [
                    { 'pattern': 'react', 'group': 'external', 'position': 'before' },
                ],
                'newlines-between': 'always',
                'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
            },
        ],
        'quotes': ['error', 'single'],
    },
};
