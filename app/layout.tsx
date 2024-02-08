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
import { usePathname } from 'next/navigation'

import pkgJson from "@/package.json"
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
    gtag.pageview(pathname);

    if (!i18n.isInitialized) {
      i18n.init();
    }
  }, [pathname]);

  return (
    <html lang={i18nTranslation.language}>
      <head>
        <gtag.Init />

        <title>{t('title', { ns: 'common' })}</title>
        <meta name="keyword" content="blog creative responsive portfolio resume cv online personal portfolio professional portafolio creativo" />
        <meta name="description" content={t('description', { ns: 'common' })} />
        <meta name="author" content="Junior Alejandro Zamora"></meta>
      </head>
      <body className={`${mainFont.className} antialiased wrapper`}>

        <FloatActions />
        <Navigation />

        <div className="content">
          <header id="Header" className="flex cross-axis-center main-axis-between header">
            <div className="flex brand">
              <Image
                src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704135888/vtqcg6xuptsud5hkx1te.png"
                alt="Logo Alejandro Zamora"
                width={32}
                height={21}
              />
            </div>
            <div className="flex actions">
              <LanguageSelector />
            </div>
          </header>

          <main>
            {children}
          </main>

          <footer className="flex footer gap p-x">
            <div className="col gap-small main-axis-between">
              <Text text={t('template_by', { ns: 'common' })} />
              <Text weight={300} type="bodySmall" text={`${pkgJson.name} ${pkgJson.version}`} />
              <Chip
                content={
                  <IconButton title="Github" isHrefExternal={true} href="https://github.com/alejandrozamoraaz/portfolio" imageIconProps={{
                    src: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142331/icons/sllwivcceoufmztfw35m.png",
                    alt: "Github - icon by Icons8"
                  }} />
                }
                text={t('see_project', { ns: 'common' })}
              />
            </div>
            <div className="col main-axis-between">
              <Text classText="flex-end" text={t('developed_in', { ns: 'common' })} />
              <div className="flex-end">
                <Chip text={t('tag_google_analytics', { ns: 'common' })} />
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html >
  )
}
