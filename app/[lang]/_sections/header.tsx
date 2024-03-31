import Image from 'next/image'
import ContactButtons from '@/app/[lang]/_sections/widgets/contact-buttons'

import Text from '@/app/_components/text/text'

import { Dictionary } from '@/app/_lib/definitions';

export default function Header({ t }: {
    t: Dictionary["common"];
}) {
    return (
        <section id="Header" className={"col gap p-x-small header-cover main-axis-center cross-axis-center"}>
            <div>
                <Text text={t.label_position} />
                <Text text={t.autor} type="title" />
            </div>
            <div className="p-y">
                <Text text={t.iam} />
                <Text text={t.primary_position} classText="gradient-color" type="headline" />
            </div>

            <ContactButtons t={t} />

            <Image
                src="/20240321133703341_syo1kxh_dw9pem.png"
                alt="Alejandro Zamora in a blue suit and white shirt in a blue circle with a blue background and a blue circle with a man in a white shirt and blue blazer."
                className="img-under-content"
                width={900}
                height={674}
            />
        </section>
    )
}