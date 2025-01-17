module.exports = {
    'ignorePatterns': ['dist/**/*'],
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4,
            {'SwitchCase': 1}
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        'prefer-const': 'warn',
        'no-empty': 'warn',
    }
}
