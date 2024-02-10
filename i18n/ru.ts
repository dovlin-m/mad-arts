import { header } from '~/i18n/ru/header';
import { pages } from '~/i18n/ru/pages';
import { links } from '~/i18n/ru/links';
import { footer } from '~/i18n/ru/footer';
import { portfolio } from '~/i18n/ru/portfolio';

export const translations = {
  header,
  pages,
  links,
  footer,
  portfolio,
};

export default () => new Promise(resolve => resolve(translations));
