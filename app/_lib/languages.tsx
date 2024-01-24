import { Language } from '@/app/_lib/definitions';

import enTranslation from '@/translations/en.json';
import esTranslation from '@/translations/es.json';

export const languages: Language[] = [
    {
        display: 'English',
        code: 'en',
    },
    {
        display: 'Español',
        code: 'es',
    }
];

export const resources = {
    en: enTranslation,
    es: esTranslation,
};
