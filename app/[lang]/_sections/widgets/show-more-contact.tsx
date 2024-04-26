'use client'

import TextButton from '@/app/_components/buttons/text-button/text-button';

import { gtagTextButtonHref } from '@/app/_lib/helpers/gtag-events';

export default function ShowMoreContact() {
    return (
        <TextButton hrefExternal="https://linktr.ee/alejandrozamoraaz?subscribe" text="linktr.ee" onClick={() => gtagTextButtonHref("navigate_to_linktr.ee")} />
    );
}