// LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      {/* Add more language buttons as needed */}
    </div>

    // <select className="button text-button" value={activeLocale} onChange={handleChangeLocale}>
    //         {i18n.locales.map((locale) => (
    //             <option key={locale} value={locale}>
    //                 {locale}
    //             </option>
    //         ))}
    //     </select>
  );
};

export default LanguageSelector;
