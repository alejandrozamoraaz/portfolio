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

  const currentLocale = i18n.locales.find((locale) => locale.code === pathName.split("/")[1]) || i18n.defaultLocale;

  const [selectedOption, setSelectedOption] = useState<Locale>(currentLocale);

  const changeLanguage = (locale: Locale): string => {
    setSelectedOption(locale);

    event({ action: "select", category: "i18n", label: `Select language {${locale.code}}`, value: null });

    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale.code;
    return segments.join("/");
  };

  return (
    <div className="select">
      <div className={`button current-option`}>
        <Text type="body" text={selectedOption.display} />
        <ArrowUp className={`icon arrow-icon`} />
      </div>

      <div className="col select-options">
        {i18n.locales.map((locale, index) => (
          <div key={index} className="button select-option" onClick={() => router.push(changeLanguage(locale))}>
            <Text type="body" text={locale.display} />
          </div>
        ))}
      </div>

    </div>
  );
}
