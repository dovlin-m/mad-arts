import header from './en/header';
import pages from './en/pages';
import portfolio from './en/portfolio';
import buttons from '~/i18n/en/buttons';

export default defineI18nLocale(async () => {
  return {
    header,
    pages,
    portfolio,
    buttons,
  };
});

