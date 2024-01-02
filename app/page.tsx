import { getDictionary } from '@/get-dictionary'

import Image from 'next/image'

import IconImage from '@/app/_components/icon-image'
import Text from '@/app/_components/text/text'

import ContactButtons from '@/app/_widgets/contact-buttons'
import Typewriter from '@/app/_widgets/typewriter'

import { sections } from '@/app/_lib/data/sections'

export default async function Home() {
  const dictionary = await getDictionary('es');

  return (
    <div className="col gap">
      <section style={{ height: "80vh", position: "relative" }} id="Header" className={"flex p-x p-y show-on-scroll"}>
        <div className="col gap main-axis-center">
          <div>
            <Text text="Ing." />
            <Text text="Junior Alejandro Zamora" type="headline" weight={900} />
          </div>
          <div>
            <Text text={dictionary.headerSection.iam} />
            <Typewriter words={[
              dictionary.headerSection.architect,
              dictionary.headerSection.developer,
              dictionary.headerSection.designer,
              dictionary.headerSection.analyst
            ]} />
          </div>

          <ContactButtons />
        </div>

        <Image
          src="cv012qnfwhvwsd6tsqcg"
          alt="Alejandro Zamora in a blue suit and white shirt in a blue circle with a blue background and a blue circle with a man in a white shirt and blue blazer."
          style={{
            objectFit: "contain",
            objectPosition: "right",
            zIndex: "-1"
          }}
          fill={true}
        />
      </section>

      {sections(dictionary).map((link) => {
        return (
          <section key={link.linkName} id={link.linkName} className="container show-on-scroll">
            <div className="flex p-y gap cross-axis-center">
              <IconImage iconUrl={link.iconUrl} iconAlt={link.iconAlt} size="large" />
              <Text text={link.name} type="title" weight={600} />
            </div>

            <link.content dictionary={dictionary} />
          </section>
        );
      })}

    </div>
  )
}
