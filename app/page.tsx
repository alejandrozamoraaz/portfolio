'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import Icon from '@/app/_components/icon'
import Text from '@/app/_components/text/text'

import ContactButtons from '@/app/_widgets/contact-buttons'

import { sections } from '@/app/_lib/data/sections'

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="col gap">
      <section id="Header" className={"flex container vh-100-header show-on-scroll"}>
        <div className="col gap main-axis-center">
          <div>
            <Text text="Ing." />
            <Text text="Junior Alejandro Zamora" type="headline" weight={900} />
          </div>
          <div className="gap-small p-y">
            <Text text={t('iam', { ns: 'common' })} type="bodySmall" />
            <Text text={t('primary_position', { ns: 'common' })} classText="primary-color" type="title" />
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

      {sections(t).map((link) => {
        return (
          <section key={link.linkName} id={link.linkName} className="container col gap show-on-scroll">
            <div className="flex p-y p-x gap cross-axis-center container-title">
              <Icon type="img" imageIconProps={{ src: link.iconUrl, alt: link.iconAlt }} size="large" />
              <Text text={link.name} type="title" weight={600} />
            </div>

            <link.content t={t} />
          </section>
        );
      })}
    </div>
  )
}
