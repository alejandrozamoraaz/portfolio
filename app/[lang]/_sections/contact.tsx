'use client'

import Script from 'next/script';

import Text from '@/app/_components/text/text';
import TextButton from '@/app/_components/buttons/text-button/text-button';

import { gtagTextButtonHref } from '@/app/_lib/helpers/gtag-events';
import { Dictionary } from '@/app/_lib/definitions';

import ContactButtons from '@/app/[lang]/_sections/widgets/contact-buttons';

export default function Contact({ t }: {
    t: Dictionary;
}) {
    return (
        <div className="flex gap main-axis-center cross-axis-center">
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="alejandrozamoraaz" data-version="v1">
                <a title='linkedin' className="badge-base__link LI-simple-link" href="https://ni.linkedin.com/in/alejandrozamoraaz/en?trk=profile-badge"></a>
            </div>
            <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />

            <div>
                <ContactButtons t={t.common} actionsClass="main-axis-center p-y-small" />
                <div className="col gap-small m-y-large">
                    <Text text={t.contact_section.see_more} type="body" />
                    <TextButton hrefExternal="https://linktr.ee/alejandrozamoraaz?subscribe" text="linktr.ee" onClick={() => gtagTextButtonHref("navigate_to_linktr.ee")} />
                </div>
            </div>
        </div>
    );
}
