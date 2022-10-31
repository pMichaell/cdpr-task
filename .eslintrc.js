module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'xo', 'prettier'],
  overrides: [
    {
      extends: ['xo-typescript', 'prettier'],
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'arrow-body-style': 'off',
  },
};
