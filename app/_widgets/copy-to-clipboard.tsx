'use client'

import { useState } from 'react'

import Chip from '@/app/_components/chip'
import IconButton from '@/app/_components/icon-button'

import { Copy } from '@/app/_lib/icons'

export default function CopyToClipboard({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopyToClipboard = () => {
        if (!navigator.clipboard) {
            return;
        }

        navigator.clipboard.writeText(text).then(() => { setCopied(true) });

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Chip
            content={
                <IconButton onClick={handleCopyToClipboard} iconType="svg" svgIconProps={{ svgContent: Copy }} />
            }
            text={copied ? 'Copied!' : text} />

    );
}


