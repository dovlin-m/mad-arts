export default defineI18nConfig(() => ({
  locale: 'en',
  strategy: 'prefix_except_default',
  warnHtmlMessage: false,
  missingWarn: false,
  fallbackLocale: 'en',
}));
