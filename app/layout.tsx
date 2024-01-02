import '@/app/_lib/styles/globals.css'
import '@/app/_lib/styles/layout.css'
import '@/app/_lib/styles/theme.css'
import '@/app/_lib/styles/effects.css'

import '@fancyapps/ui/dist/carousel/carousel.css'
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css'

import type { Metadata } from 'next'
import Image from 'next/image'

import { getDictionary } from '@/get-dictionary'
// import { i18n, Locale } from '@/i18n-config'
import { mainFont } from '@/app/fonts'

// import Chip from '@/app/_components/chip/chip'

import FloatActions from './_lib/widgets/float-actions'
// import LocaleSwitcher from './_widgets/locale-switcher'
import Navigation from './_lib/widgets/navigation'

import Text from '@/app/_components/text/text'

export const metadata: Metadata = {
  title: 'Junior Alejandro Zamora\'s Portfolio',
  authors: [{ name: 'Junior Alejandro Zamora' }],
  keywords: 'blog, creative portfolio, responsive portfolio, resume, cv, online resume, personal, portfolio, professional cv',
  description: 'Junior Alejandro Zamora\'s Portfolio',
}

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }))
// }

export default async function RootLayout({
  children,
  // params,
}: {
  children: React.ReactNode;
  // params: { lang: Locale };
}) {
  const dictionary = await getDictionary('es');

  return (
    <html lang="es">
      <body className={`${mainFont.className} antialiased wrapper`}>
        <header className="header">
          <div className="brand">
            <Image
              src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704135888/vtqcg6xuptsud5hkx1te.png"
              alt="Logo Alejandro Zamora"
              width={32}
              height={21}
            />
          </div>
          {/* <div className="justify-end gap"> */}
          {/* {params.lang !== "es" && <Chip text={dictionary.common.textAutoTranslated} />} */}
          {/* <LocaleSwitcher activeLocale={params.lang} /> */}
          {/* </div> */}
        </header>

        <main className="content">
          {children}

          <FloatActions />

          <footer className="footer">
            <Text weight={300} type="bodySmall" text="Template by Alejandro Zamora" />
          </footer>
        </main>

        <Navigation dictionary={dictionary} />
      </body>
    </html>
  )
}
