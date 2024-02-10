import { header } from '~/i18n/en/header';
import { pages } from '~/i18n/en/pages';
import { links } from '~/i18n/en/links';
import { footer } from '~/i18n/en/footer';
import { portfolio } from '~/i18n/en/portfolio';

export const translations = {
  header,
  pages,
  links,
  footer,
  portfolio,
};

export default () => new Promise(resolve => resolve(translations));
