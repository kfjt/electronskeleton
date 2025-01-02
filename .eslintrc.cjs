module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off',
          "@typescript-eslint/no-explicit-any": "off"
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  };