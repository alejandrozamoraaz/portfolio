'use client'

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

import { type Locale, i18n } from "@/i18n";
import { event } from '@/app/_lib/helpers/gtag';

import SelectButton from "@/app/_components/buttons/select-button/select-button";

const LanguageIcon = dynamic(() => import('@/app/_lib/icons/language'));

export default function LanguageSelector() {
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
    <SelectButton
      currentOption={{ display: selectedOption.display, value: selectedOption.code }}
      icon={<LanguageIcon className="icon" />}
      options={
        i18n.locales.map((locale) => ({
          display: locale.display,
          value: locale.code,
        }))
      }
      onChange={(option) => router.push(changeLanguage({ display: option.display, code: option.value } as Locale))}
    />
  );
}
