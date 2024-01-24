import Script from 'next/script'
import { TFunction } from 'i18next'

import Text from '@/app/_components/text/text'
import TextButton from '@/app/_components/text-button'
import ContactButtons from '@/app/_widgets/contact-buttons'

export default function Contact({ t }: {
    t: TFunction<[]>;
}) {
    return (
        <div className="col gap main-axis-center cross-axis-center">
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="alejandrozamoraaz" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://ni.linkedin.com/in/alejandrozamoraaz/en?trk=profile-badge"></a>
            </div>
            <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />

            <ContactButtons />
            <div className="flex p-y-large">
                <Text type="bodyLarge" text={t('see_more', { ns: 'common' })} />
                <TextButton href="https://bio.site/alejandrozamora" text="bio.site" isHrefExternal={true} />
            </div>
        </div>
    );
}
