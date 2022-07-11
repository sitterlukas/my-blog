module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'react/no-unescaped-entities': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
  },
};
