import { sections } from '@/app/_lib/data/sections';
import { getDictionary } from "@/get-dictionary";

import Icon from '@/app/_components/icon/icon';
import Text from '@/app/_components/text/text';

import Header from '@/app/[lang]/_sections/header';

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
          <section key={link.linkName} id={link.linkName} className="col m-x gap-large m-y-large">
            <div className="flex gap m-y-large cross-axis-center main-axis-center">
              <Icon iconData={link.icon} size="extra-large" />
              <Text text={link.name} type="title" />
            </div>

            <link.content t={dictionary} />
          </section>
        );
      })}
    </>
  )
}
