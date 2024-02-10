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

export const dateTimeFormats = (languages) => {
  return languages.reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: {
        table: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        },
        tableFull: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'UTC',
        },
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      },
    };
  }, {});
};
