import '@/app/_styles/tokens.css';
import '@/app/_styles/globals.css';
import '@/app/_styles/theme.css';
import '@/app/_styles/effects.css';
import '@/app/_styles/custom.css';

import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next";

import { i18n } from "@/i18n";
import { getDictionary } from "@/get-dictionary";
import { mainFont } from '@/app/fonts';
import * as gtag from '@/app/_lib/helpers/gtag';

import Progress from '@/app/[lang]/_layout-widgets/progress/progress';
import Actions from '@/app/[lang]/_layout-widgets/actions/actions';
import Header from '@/app/[lang]/_layout-widgets/header/header';
import Footer from '@/app/[lang]/_layout-widgets/footer';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale.code }));
}

export async function generateMetadata(
  { params,
  }: {
    params: { lang: string };
  }
): Promise<Metadata> {
  const dictionary = (await getDictionary(params.lang)).common;

  return {
    title: dictionary.title,
    description: dictionary.description,
    authors: [{ name: dictionary.autor }],
    keywords: dictionary.keywords,
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
      <body className={`${mainFont.className} antialiased`}>
        <gtag.default />

        <Progress />

        <Actions />

        <Header />

        <main>
          {children}
        </main>

        <Footer t={dictionary} />

        <SpeedInsights />
      </body>
    </html >
  )
}