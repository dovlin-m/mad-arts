// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['tsconfig.json', 'node_modules', 'dist'],
  rules: {
    camelcase: 'off',
    'no-console': 'off',
    semi: ['error', 'always'],
    'no-trailing-spaces': 'off',
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': 'off',

    'import/named': 'off',
    'import/extensions': 'off',
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/no-import-module-exports': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/namespace': ['error', { allowComputed: true }],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'vue/no-v-html': 'off',
    'vue/no-template-shadow': 'off',
    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': 'off',
  },
});
