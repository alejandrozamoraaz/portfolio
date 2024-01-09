'use client'

import '@/app/_lib/styles/globals.css'
import '@/app/_lib/styles/layout.css'
import '@/app/_lib/styles/theme.css'
import '@/app/_lib/styles/effects.css'

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import '@fancyapps/ui/dist/carousel/carousel.css'

import type { Metadata } from 'next'
import Image from 'next/image'

// import { getDictionary } from '@/get-dictionary'
// import { i18n, Locale } from '@/i18n-config'
import { mainFont } from '@/app/fonts'

// import Chip from '@/app/_components/chip/chip'

import FloatActions from './_lib/widgets/float-actions'
// import LocaleSwitcher from './_widgets/locale-switcher'
import Navigation from './_lib/widgets/navigation'

import Text from '@/app/_components/text/text'

// export const metadata = {
//   title: 'Junior Alejandro Zamora\'s Portfolio',
//   authors: [{ name: 'Junior Alejandro Zamora' }],
//   keywords: 'blog, creative portfolio, responsive portfolio, resume, cv, online resume, personal, portfolio, professional cv',
//   description: 'Junior Alejandro Zamora\'s Portfolio',
// }

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }))
// }



import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

export default function RootLayout({
  children,
  // params,
}: {
  children: React.ReactNode;
  // params: { lang: Locale };
}) {
  // const dictionary = await getDictionary('es');

  useEffect(() => {
    // Asegúrate de que i18n se inicialice solo una vez
    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, []);

  const { i18n: i18nTranslation } = useTranslation();
  return (
    <html lang={i18nTranslation.language}>
      <body className={`${mainFont.className} antialiased wrapper`}>



        <br />
        <br />
        <br />
        <br />



        {children}
        {/* <header className="header">
          <div className="brand">
            <Image
              src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704135888/vtqcg6xuptsud5hkx1te.png"
              alt="Logo Alejandro Zamora"
              width={32}
              height={21}
            />
          </div> */}
        {/* <div className="justify-end gap"> */}
        {/* {params.lang !== "es" && <Chip text={dictionary.common.textAutoTranslated} />} */}
        {/* <LocaleSwitcher activeLocale={params.lang} /> */}
        {/* </div> */}
        {/* </header>

        <FloatActions />
        <Navigation dictionary={dictionary} />

        <main className="content">
          {children}

          <footer className="footer">
            <Text weight={300} type="bodySmall" text="Template by Alejandro Zamora" />
          </footer>
        </main> */}
      </body>
    </html >
  )
}
