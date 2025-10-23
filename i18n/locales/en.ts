import header from '~/i18n/locales/en/header';
import pages from '~/i18n/locales/en/pages';
import portfolio from '~/i18n/locales/en/portfolio';
import buttons from '~/i18n/locales/en/buttons';

export default defineI18nLocale(async () => {
  return {
    header,
    pages,
    portfolio,
    buttons,
  };
});

