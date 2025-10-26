import header from './ru/header';
import pages from './ru/pages';
import portfolio from './ru/portfolio';
import buttons from './ru/buttons';

export default defineI18nLocale(async () => {
  return {
    header,
    pages,
    portfolio,
    buttons,
  };
});

