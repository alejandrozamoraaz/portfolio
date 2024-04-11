import Text from '@/app/_components/text/text';

import { Dictionary } from '@/app/_lib/definitions';

import ContactButtons from '@/app/[lang]/_sections/widgets/contact-buttons';

export default function Header({ t }: {
    t: Dictionary["common"];
}) {
    return (
        <section className={"col gap p-x-small header-cover main-axis-center cross-axis-center"}>
            <div>
                <Text text={t.label_position} />
                <Text text={t.autor} type="title" classText="center-text" />
            </div>
            <div className="p-y">
                <Text text={t.iam} />
                <Text text={t.primary_position} classText="gradient-color center-text" type="headline" />
            </div>

            <ContactButtons t={t} />
        </section>
    )
}