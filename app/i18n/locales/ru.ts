import header from '~/i18n/locales/ru/header';
import pages from '~/i18n/locales/ru/pages';
import portfolio from '~/i18n/locales/ru/portfolio';
import buttons from '~/i18n/locales/ru/buttons';

export default defineI18nLocale(async () => {
  return {
    header,
    pages,
    portfolio,
    buttons,
  };
});

