'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Chip from '@/app/_components/chip'
import IconButton from '@/app/_components/icon-button'

import { Copy } from '@/app/_lib/icons'

export default function CopyToClipboard({ text }: { text: string }) {
    const { t } = useTranslation();
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
                <IconButton title="Copy Email" onClick={handleCopyToClipboard} svgIconProps={{ svgContent: Copy }} />
            }
            text={copied ? t('copied_to_clipboard', { ns: 'common' }) : text} />

    );
}


