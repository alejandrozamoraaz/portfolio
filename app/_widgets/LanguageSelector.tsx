'use client'

import { useTranslation } from 'react-i18next'

import { languages } from '@/app/_lib/languages'
import Chip from '@/app/_components/chip'

import { event } from '@/app/_lib/utils/gtag'

export default function LanguageSelector() {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (newLanguage: string) => {
    event({ action: "select", category: "i18n", label: `Select language {${newLanguage}}`, value: null });
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      {i18n.language !== 'es' && <Chip text={t("translate_from_spanish", { ns: "common" })} />}
      <select name="language_select" title={t('change_language')} className="button text-button" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.display}
          </option>
        ))}
      </select>
    </>
  );
}
