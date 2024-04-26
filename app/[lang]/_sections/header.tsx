import dynamic from 'next/dynamic';

import { getDictionary } from "@/get-dictionary";

import Text from '@/app/_components/text/text';

const ContactButtons = dynamic(() => import('@/app/[lang]/_sections/widgets/contact-buttons'));

export default async function Header({
    lang,
}: {
    lang: string;
}) {
    const dictionary = (await getDictionary(lang)).common;

    return (
        <section className={"col gap custom-header-cover main-axis-center cross-axis-center"}>
            <div className="p-y-large">
                <Text text={dictionary.iam} classText="p-x-small" />
                <Text text={dictionary.autor} type="title" classText="center-text" />
            </div>

            <div className="p-y-large">
                <Text text={dictionary.label_position} classText="p-x-small" />
                <Text text={dictionary.primary_position} classText="gradient-color center-text" type="headline" />
            </div>

            <ContactButtons t={dictionary} />
        </section>
    )
}