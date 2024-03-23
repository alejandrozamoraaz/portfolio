'use client'

import { useState } from 'react'

import Chip from '@/app/_components/chip'
import IconButton from '@/app/_components/icon-button'

import { Copy } from '@/app/_lib/icons'

import { Dictionary } from '@/app/_lib/definitions'

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
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(() => { setCopied(false) });
    };

    return (
        <Chip
            content={
                <IconButton title="Copy Email" onClick={handleCopyToClipboard}>
                    <Copy className="icon" />
                </IconButton>
            }
            text={copied ? t.copied_to_clipboard : text} />

    );
}


