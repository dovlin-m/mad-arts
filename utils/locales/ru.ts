import { header } from '~/utils/locales/ru/header';
import { pages } from '~/utils/locales/ru/pages';
import { links } from '~/utils/locales/ru/links';
import { footer } from '~/utils/locales/ru/footer';

export const translations = {
  header,
  pages,
  links,
  footer,
};

// eslint-disable-next-line no-promise-executor-return
export default () => new Promise(resolve => resolve(translations));
