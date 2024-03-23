import '@/app/_styles/globals.css'
import '@/app/_styles/layout.css'
import '@/app/_styles/theme.css'
import '@/app/_styles/effects.css'

import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { mainFont } from '@/app/fonts'
import { i18n } from "@/i18n"
import { getDictionary } from "@/get-dictionary"

import * as gtag from '@/app/_lib/helpers/gtag'

import ActionsWrapper from '@/app/[lang]/_layout-widgets/actions-wrapper'
import HeaderWrapper from '@/app/[lang]/_layout-widgets/header-wrapper'
import FooterWrapper from '@/app/[lang]/_layout-widgets/footer-wrapper'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.code }));
}

export async function generateMetadata(
  { params,
  }: {
    params: { lang: string };
  }
): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.common.title,
    description: dictionary.common.description,
    authors: [{ name: dictionary.common.autor }],
    keywords: dictionary.common.keywords,
  }
}

export default async function RootLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dictionary = (await getDictionary(params.lang)).common;

  return (
    <html lang={params.lang}>
      <head>
        <gtag.init />
      </head>
      <body className={`${mainFont.className} antialiased wrapper`}>
        <gtag.default />

        <div className="progress-wrapper">
          <div className="progress-bar-fill-wrapper"></div>
          <div className="progress-bar-end-indicator-wrapper"></div>
        </div>

        <ActionsWrapper />

        <HeaderWrapper t={dictionary} />

        <main>
          {children}
        </main>

        <FooterWrapper t={dictionary} />

        <SpeedInsights />
      </body>
    </html >
  )
}
