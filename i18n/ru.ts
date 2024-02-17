import header from './ru/header';
import pages from './ru/pages';
import links from './ru/links';
import footer from './ru/footer';
import portfolio from './ru/portfolio';

export default defineI18nLocale(async () => {
  return {
    header,
    pages,
    links,
    footer,
    portfolio,
  };
});
