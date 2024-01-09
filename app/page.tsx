'use client'

// import { getDictionary } from '@/get-dictionary'

import Image from 'next/image'

import Icon from '@/app/_components/icon'
import Text from '@/app/_components/text/text'

import ContactButtons from '@/app/_widgets/contact-buttons'

import { sections } from '@/app/_lib/data/sections'

import { useTranslation } from 'react-i18next';
import LanguageSelector from './_widgets/LanguageSelector'
export default function Home() {
  // const dictionary = await getDictionary('es');

  const { t } = useTranslation();
  return (
    <div className="col gap">


      <p>{t('Hello!')}</p>
      <LanguageSelector />

      {/* <section id="Header" className={"flex container vh-100-header show-on-scroll"}>
        <div className="col gap main-axis-center">
          <div>
            <Text text="Ing." />
            <Text text="Junior Alejandro Zamora" type="headline" weight={900} />
          </div>
          <div className="gap-small p-y">
            <Text text={dictionary.headerSection.iam} type="bodySmall" />
            <Text text="Software Engineer" classText="primary-color" type="title" />
          </div>

          <ContactButtons />
        </div>

        <Image
          src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704143537/cv012qnfwhvwsd6tsqcg.png"
          alt="Alejandro Zamora in a blue suit and white shirt in a blue circle with a blue background and a blue circle with a man in a white shirt and blue blazer."
          className="img-under-content"
          priority
          fill={true}
        />
      </section>

      {sections(dictionary).map((link) => {
        return (
          <section key={link.linkName} id={link.linkName} className="container col gap show-on-scroll">
            <div className="flex p-y p-x gap cross-axis-center container-title">
              <Icon type="img" imageIconProps={{ src: link.iconUrl, alt: link.iconAlt }} size="large" />
              <Text text={link.name} type="title" weight={600} />
            </div>

            <link.content dictionary={dictionary} />
          </section>
        );
      })} */}
    </div>
  )
}
