'use client'

import IconButton from '@/app/_components/buttons/icon-button/icon-button';

import CopyToClipboard from '@/app/[lang]/_sections/widgets/copy-to-clipboard';

import { Github, Linkedin } from '@/app/_lib/icons';
import { gtagIconButtonHref } from '@/app/_lib/helpers/gtag-events';
import { Dictionary } from '@/app/_lib/definitions';
import Icon from '@/app/_components/icon/icon';

export default function ContactButtons({ t, actionsClass: buttonGroupClass }: { t: Dictionary["common"], actionsClass?: string }) {
    return (
        <>
            <CopyToClipboard text="junioralejandrozamora.az@gmail.com" t={t} />

            <div className={`flex gap ${buttonGroupClass}`}>
                <IconButton
                    hrefExternal="https://github.com/alejandrozamoraaz"
                    title="Go to link Github"
                    onClick={() => gtagIconButtonHref("navigate_to_github_profile")}
                >
                    <Icon iconData={Github} />
                </IconButton>
                <IconButton
                    hrefExternal="https://www.linkedin.com/in/alejandrozamoraaz"
                    title="Go to link Linkedin"
                    onClick={() => gtagIconButtonHref("navigate_to_linkedin_profile")}
                >
                    <Icon iconData={Linkedin} />
                </IconButton>
            </div>
        </>
    );
}