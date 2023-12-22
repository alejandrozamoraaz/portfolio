import './globals.css'
import style from './layout.module.css'

import '@fancyapps/ui/dist/carousel/carousel.css'
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css'

import type { Metadata } from 'next'
import Image from 'next/image'

import { getDictionary } from '@/get-dictionary'
import { i18n, Locale } from '@/i18n-config'
import { mainFont } from '@/app/fonts'

// import Chip from '@/app/_components/chip/chip'

import FloatAction from './_widgets/float-action'
// import LocaleSwitcher from './_widgets/locale-switcher'
import NavigationBar from './_widgets/navigation-bar'

export const metadata: Metadata = {
  title: 'Junior Alejandro Zamora\'s Portfolio',
  authors: [{ name: 'Junior Alejandro Zamora' }],
  keywords: 'blog, creative portfolio, responsive portfolio, resume, cv, online resume, personal, portfolio, professional cv',
  description: 'Junior Alejandro Zamora\'s Portfolio',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary('es');

  return (
    <html lang="es">
      <body className={`${mainFont.className} antialiased`}>
        <div className={style.layout}>
          <div className={style.topBar + " row vertical-center p-x"}>
            <div className="col col-2">
              <div className={style.brand + " vertical-center gradient-background-color"}>
                <Image
                  src="https://i.postimg.cc/MZ4XNZQn/icon192.png"
                  alt="Logo"
                  width={48}
                  height={27}
                />
              </div>
            </div>
            <div className="col col-10">
              {/* <div className="justify-end gap"> */}
              {/* {params.lang !== "es" && <Chip text={dictionary.common.textAutoTranslated} />} */}
              {/* <LocaleSwitcher activeLocale={params.lang} /> */}
              {/* </div> */}
            </div>
          </div>

          <NavigationBar dictionary={dictionary} />

          <FloatAction />

          {children}
        </div>

      </body>
    </html>
  )
}
