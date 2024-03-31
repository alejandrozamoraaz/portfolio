export const i18n = {
  defaultLocale: {
    display: 'English',
    code: 'en'
  },
  locales: [
    {
      display: 'English',
      code: 'en'
    },
    {
      display: 'Español',
      code: 'es'
    }
  ]
} as const;

export type Locale = (typeof i18n)["locales"][number];