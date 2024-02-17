export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  strategy: 'prefix_except_default',
  warnHtmlMessage: false,
  missingWarn: false,
  fallbackLocale: 'en',
}));
