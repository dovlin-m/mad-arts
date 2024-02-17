import header from './en/header';
import pages from './en/pages';
import links from './en/links';
import footer from './en/footer';
import portfolio from './en/portfolio';

export default defineI18nLocale(async () => {
  return {
    header,
    pages,
    links,
    footer,
    portfolio,
  };
});

