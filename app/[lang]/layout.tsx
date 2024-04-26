import '@/app/_styles/tokens.css';
import '@/app/_styles/globals.css';
import '@/app/_styles/theme.css';
import '@/app/_styles/effects.css';
import '@/app/_styles/custom.css';

import type { Metadata } from 'next';
import dynamic from "next/dynamic";

import { i18n } from "@/i18n";
import { getDictionary } from "@/get-dictionary";
import { mainFont } from '@/app/fonts';

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

const Header = dynamic(() => import('@/app/[lang]/_layout-widgets/header/header'));
const Progress = dynamic(() => import('@/app/[lang]/_layout-widgets/progress/progress'));
const Actions = dynamic(() => import('@/app/[lang]/_layout-widgets/actions/actions'));
const Footer = dynamic(() => import('@/app/[lang]/_layout-widgets/footer/footer'));

const GtagInit = dynamic(() => import('@/app/_lib/helpers/gtag').then((mod) => mod.init));

export default async function RootLayout({
  children, params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <GtagInit />
      </head>
      <body className={`${mainFont.className} antialiased`}>
        <Progress />

        <Actions />

        <Header />

        <main>
          {children}
        </main>

        <Footer lang={params.lang} />
      </body>
    </html >
  )
}