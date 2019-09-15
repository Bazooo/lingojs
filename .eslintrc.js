module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/camelcase': [
      'error',
      {
        ignoreDestructuring: false,
        properties: 'never'
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      },
    ],
    'id-length': [
      'error',
      {
        min: 2,
        exceptions: ['i']
      },
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
