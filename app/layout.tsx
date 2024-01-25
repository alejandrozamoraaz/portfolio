'use client'

import '@/app/_lib/styles/globals.css'
import '@/app/_lib/styles/layout.css'
import '@/app/_lib/styles/theme.css'
import '@/app/_lib/styles/effects.css'

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import '@fancyapps/ui/dist/carousel/carousel.css'

import React, { useEffect } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Script from 'next/script'

import i18n from '@/i18n'
import { mainFont } from '@/app/fonts'

import LanguageSelector from '@/app/_widgets/LanguageSelector'
import Text from '@/app/_components/text/text'

import FloatActions from '@/app/_lib/widgets/float-actions'
import Navigation from '@/app/_lib/widgets/navigation'
import Chip from '@/app/_components/chip'
import IconButton from '@/app/_components/icon-button'

// const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
// declare global {
//   interface Window {
//     gtag: any;
//   }
// }

export default function RootLayout({ children, router }: { children: React.ReactNode; router: NextRouter; }) {

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n.init();
    }

    // const handleRouteChange = (url: any) => {
    //   window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    //     page_path: url,
    //   });
    // };

    // if (router && process.env.NODE_ENV === 'production') {
    //   router.events.on('routeChangeComplete', handleRouteChange);

    //   return () => {
    //     router.events.off('routeChangeComplete', handleRouteChange);
    //   };
    // }

    // }, [router]);
  }, []);

  const { t, i18n: i18nTranslation } = useTranslation();

  return (
    <html lang={i18nTranslation.language}>
      <head>
        <title>{t('title', { ns: 'common' })}</title>
        <meta name="keyword" content="blog creative responsive portfolio resume cv online personal portfolio professional portafolio creativo" />
        <meta name="description" content={t('description', { ns: 'common' })} />
        <meta name="author" content="Junior Alejandro Zamora"></meta>

        {/* {process.env.NODE_ENV === 'production' && (
          <>
            <Script async src={gtag} />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
            </Script>
          </>
        )} */}

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C99X4KDBZY"></Script>
        <Script src="/analytics.js"></Script>
      </head>
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
          <div className="actions">
            <LanguageSelector />
          </div>
        </header>

        <FloatActions />
        <Navigation />

        <main className="content">
          {children}

          <footer className="footer">
            <div className="col gap">
              <Text type="bodySmall" text={t('template_by', { ns: 'common' })} />
              <Chip
                content={
                  <IconButton title="Github" isHrefExternal={true} href="https://github.com/alejandrozamoraaz/portfolio" iconType="img" imageIconProps={{
                    src: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142331/icons/sllwivcceoufmztfw35m.png",
                    alt: "Github - icon by Icons8"
                  }} />
                }
                text={t('see_project', { ns: 'common' })}
              />
            </div>
            <div className="col">
              <Text classText="flex-end p-y-small" type="bodySmall" text={t('developed_in', { ns: 'common' })} />
              <Text classText="flex-end" weight={300} type="bodySmall" text={t('based_in', { ns: 'common' })} />
              <Text classText="flex-end" weight={300} type="bodySmall" text="Version 1.0" />
            </div>
          </footer>
        </main>
      </body>
    </html >
  )
}
