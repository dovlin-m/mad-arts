import { header } from '~/utils/locales/en/header';
import { pages } from '~/utils/locales/en/pages';
import { links } from '~/utils/locales/en/links';
import { footer } from '~/utils/locales/en/footer';
import { portfolio } from '~/utils/locales/en/portfolio';

export const translations = {
  header,
  pages,
  links,
  footer,
  portfolio,
};

// eslint-disable-next-line no-promise-executor-return
export default () => new Promise(resolve => resolve(translations));
