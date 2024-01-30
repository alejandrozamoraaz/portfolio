'use client'

import '@/app/_lib/styles/globals.css'
import '@/app/_lib/styles/layout.css'
import '@/app/_lib/styles/theme.css'
import '@/app/_lib/styles/effects.css'

import "@fancyapps/ui/dist/fancybox/fancybox.css"
import '@fancyapps/ui/dist/carousel/carousel.css'

import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

import i18n from '@/i18n'
import { mainFont } from '@/app/fonts'

import LanguageSelector from '@/app/_widgets/LanguageSelector'
import Text from '@/app/_components/text/text'

import * as gtag from '@/app/_lib/utils/gtag'

import FloatActions from '@/app/_lib/widgets/float-actions'
import Navigation from '@/app/_lib/widgets/navigation'
import Chip from '@/app/_components/chip'
import IconButton from '@/app/_components/icon-button'

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname();
  const { t, i18n: i18nTranslation } = useTranslation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      gtag.pageview(pathname);
    }

    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, [pathname]);

  return (
    <html lang={i18nTranslation.language}>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${gtag.GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}

        <title>{t('title', { ns: 'common' })}</title>
        <meta name="keyword" content="blog creative responsive portfolio resume cv online personal portfolio professional portafolio creativo" />
        <meta name="description" content={t('description', { ns: 'common' })} />
        <meta name="author" content="Junior Alejandro Zamora"></meta>
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
              <Text classText="flex-end" type="bodySmall" text={t('developed_in', { ns: 'common' })} />
              <Text classText="flex-end" weight={300} type="bodySmall" text="Version 1.0" />
              <div className="flex-end p-y-small">
                <Chip text={t('tag_google_analytics', { ns: 'common' })} />
              </div>
            </div>
          </footer>
        </main>

        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
          </>
        )}
      </body>
    </html >
  )
}
