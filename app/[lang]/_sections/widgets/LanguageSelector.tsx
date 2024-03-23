'use client'

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { type Locale, i18n } from "@/i18n"

import { event } from '@/app/_lib/helpers/gtag'

import { Dictionary } from "@/app/_lib/definitions"

import { ArrowUp } from '@/app/_lib/icons'
import Text from "@/app/_components/text/text"

export default function LanguageSelector({ t }: {
  t: Dictionary["common"];
}) {
  const pathName = usePathname();
  const router = useRouter();

  const currentLocale = i18n.locales.find((locale) => locale.code === pathName.split("/")[1]) || { display: "English", code: "en" };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Locale>(currentLocale);

  const changeLanguage = (locale: Locale): string => {
    setSelectedOption(locale);
    setIsOpen(false);

    event({ action: "select", category: "i18n", label: `Select language {${locale.code}}`, value: null });

    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale.code;
    return segments.join("/");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select">
      <div className={`button current-option ${isOpen && 'open'}`} onClick={toggleDropdown}>
        <Text type="body" text={selectedOption.display} />
        <ArrowUp className={`icon arrow-icon ${isOpen && 'open'}`} />
      </div>
      {isOpen && (
        <div className="col select-options open">
          {i18n.locales.map((locale, index) => (
            <div key={index} className="button select-option" onClick={() => router.push(changeLanguage(locale))}>
              <Text type="body" text={locale.display} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
