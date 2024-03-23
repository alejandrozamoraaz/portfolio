import Image from 'next/image'
import ContactButtons from '@/app/[lang]/_sections/widgets/contact-buttons'

import Text from '@/app/_components/text/text'

import { Dictionary } from '@/app/_lib/definitions';

export default function Header({ t }: {
    t: Dictionary["common"];
}) {
    return (
        <section id="Header" className={"flex header-cover"}>
            <div className="col p-x p-y gap main-axis-center">
                <div>
                    <Text text={t.label_position} type="body" />
                    <Text text={t.autor} type="title" />
                </div>
                <div className="p-y">
                    <Text text={t.iam} type="body" />
                    <Text text={t.primary_position} classText="gradient-color" type="headline" />
                </div>

                <ContactButtons t={t} />
            </div>

            <Image
                src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1711059802/20240321133703341_syo1kx.png"
                alt="Alejandro Zamora in a blue suit and white shirt in a blue circle with a blue background and a blue circle with a man in a white shirt and blue blazer."
                className="img-under-content"
                priority
                width={400}
                height={500}
            />
            <div className="blob-figure"></div>
        </section>
    )
}