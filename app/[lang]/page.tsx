import Text from '@/app/_components/text/text'

import { sections } from '@/app/_lib/data/sections'
import Header from '@/app/[lang]/_sections/header'

import { getDictionary } from "@/get-dictionary"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Header t={dictionary.common} />

      {sections(dictionary).map((link) => {
        return (
          <section key={link.linkName} id={link.linkName} className="col m-x gap-large m-t-extra-large">
            <div className="flex gap m-y-large cross-axis-center main-axis-center">
              <link.icon className="icon-extra-large" />
              <Text text={link.name} type="headline" />
            </div>

            <link.content t={dictionary} />
          </section>
        );
      })}
    </>
  )
}
