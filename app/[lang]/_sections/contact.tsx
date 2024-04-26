import { getDictionary } from "@/get-dictionary";

import dynamic from 'next/dynamic';
import Image from 'next/image';

import Text from '@/app/_components/text/text';

const ShowMoreContact = dynamic(() => import('@/app/[lang]/_sections/widgets/show-more-contact'));
const ContactButtons = dynamic(() => import('@/app/[lang]/_sections/widgets/contact-buttons'));
const ContactIcon = dynamic(() => import('@/app/_lib/icons/contact'));

export default async function Contact({
    lang,
}: {
    lang: string;
}) {
    const dictionary = await getDictionary(lang);

    return (
        <section className="flex gap-small custom-contact-section">
            <div className="col flex-1 hidden-mobile custom-position-relative">
                <Image className="p-x-small custom-fill-contact-image" src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1713744478/vectors/Asset_1_qmmv2j.webp" alt="Abstract background with geometric design - Image by freepik" fill sizes="100%" />
            </div>

            <div className="col flex-1 main-axis-center cross-axis-center gap-large p-x">
                <div className="flex gap cross-axis-center main-axis-center p-y-large">
                    <ContactIcon className="icon-extralarge" />
                    <Text text={dictionary["contact_section"].title} type="title" />
                </div>

                <ContactButtons t={dictionary.common} />
                <div className="col gap-small">
                    <Text text={dictionary.contact_section.see_more} type="body" />
                    <ShowMoreContact />
                </div>
            </div>
        </section>
    );
}
