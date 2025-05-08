import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from './.prettierrc.js'; // ou use um objeto direto
import js from '@eslint/js';

export default [
  js.configs.recommended,

  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Força aspas simples
      quotes: ['error', 'single'],
      // Ativa o Prettier como regra de ESLint
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];
