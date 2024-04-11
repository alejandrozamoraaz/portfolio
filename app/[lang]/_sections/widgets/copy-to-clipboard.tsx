'use client'

import { useState } from 'react';

import Chip from '@/app/_components/chip/chip';
import IconButton from '@/app/_components/buttons/icon-button/icon-button';
import Icon from '@/app/_components/icon/icon';

import { Copy } from '@/app/_lib/icons';
import { Dictionary } from '@/app/_lib/definitions';
import { gtagIconButtonClick } from '@/app/_lib/helpers/gtag-events';

export default function CopyToClipboard({
    text,
    t
}: {
    text: string;
    t: Dictionary["common"];
}) {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
        if (!navigator.clipboard) {
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            gtagIconButtonClick('copy_email_to_clipboard');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(() => { setCopied(false) });
    };

    return (
        <Chip text={copied ? t.copied_to_clipboard : text}>
            <IconButton title="Copy Email" onClick={handleCopyToClipboard}>
                <Icon iconData={Copy} />
            </IconButton>
        </Chip>
    );
}


