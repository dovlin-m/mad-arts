export const locales = [
  {
    name: 'English',
    code: 'en',
    iso: 'en-GB',
    file: 'en.ts',
  },
  {
    name: 'Русский',
    code: 'ru',
    iso: 'ru-MD',
    file: 'ru.ts',
  },
];

export const availableLocales = (languages) => {
  return locales.filter(locale => languages.includes(locale.code));
};
