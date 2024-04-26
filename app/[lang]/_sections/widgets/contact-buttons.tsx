'use client'

import dynamic from 'next/dynamic';

import IconButton from '@/app/_components/buttons/icon-button/icon-button';

import CopyToClipboard from '@/app/[lang]/_sections/widgets/copy-to-clipboard';

import { gtagIconButtonHref } from '@/app/_lib/helpers/gtag-events';
import { Dictionary } from '@/app/_lib/definitions';

const EmailIcon = dynamic(() => import('@/app/_lib/icons/email'));
const LinkedinIcon = dynamic(() => import('@/app/_lib/icons/linkedin'));

export default function ContactButtons({ t }: { t: Dictionary["common"] }) {
    return (
        <>
            <CopyToClipboard text="junioralejandrozamora.az@gmail.com" t={t} />

            <div className="flex gap">
                <IconButton
                    hrefExternal="mailto:junioralejandrozamora.az@gmail.com"
                    title="Go to link Email"
                    onClick={() => gtagIconButtonHref("navigate_to_send_by_email")}
                >
                    <EmailIcon className="icon" />
                </IconButton>
                <IconButton
                    hrefExternal="https://www.linkedin.com/in/alejandrozamoraaz"
                    title="Go to link Linkedin"
                    onClick={() => gtagIconButtonHref("navigate_to_linkedin_profile")}
                >
                    <LinkedinIcon className="icon" />
                </IconButton>
            </div>
        </>
    );
}