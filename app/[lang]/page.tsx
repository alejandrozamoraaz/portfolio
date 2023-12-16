import style from './page.module.css'

import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

import layoutStyle from '@/app/[lang]/layout.module.css'
import IconImage from '@/app/_components/icon-image'
import Text from '@/app/_components/text/text'
import Header from '@/app/[lang]/_sections/Header'
import { sections } from '@/app/_lib/data/sections'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className={layoutStyle.main + " col gap-large"}>
      <section id="Header" className={style.headerHeight + " container-fluid gradient-background-color border-radius-large vertical-center " + style.showOn}>
        <Header dictionary={dictionary} />
      </section>

      {sections(dictionary).map((link) => {
        return (
          <section key={link.linkName} id={link.linkName} className={"container surface-background-color border-radius-large p-y p-x " + style.showOn}>
            <div className="row vertical-center gap m-y">
              <IconImage iconUrl={link.iconUrl} iconAlt={link.iconAlt} size="large" />
              <Text text={link.name} type="title" weight={600} />
            </div>

            <link.content dictionary={dictionary} />
          </section>
        );
      })}

      <div className="row gap footer vertical-center p-x">
        <Text weight={300} type="bodySmall" text="Template by" />
        <Text weight={300} text="Alejandro Zamora" />
      </div>
    </main>
  )
}
