module.exports = {
  extends: [
    'stylelint-config-standard-scss' ,
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'no-descending-specificity': null,
    'no-empty-source': null,
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: 'first-nested',
        ignore: 'blockless-after-same-name-blockless',
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'tailwind.scss', 'apply'],
      },
    ],
    'color-hex-length': 'long',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
};
