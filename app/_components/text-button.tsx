'use client'

import Link from 'next/link'
import Text from '@/app/_components/text/text'

import { event } from '@/app/_lib/helpers/gtag'

export default function TextButton({
    href,
    isHrefExternal,
    text,
    classButton
}: {
    href: string;
    isHrefExternal?: boolean;
    text: string;
    classButton?: String;
}) {
    return (
        <Link
            rel={isHrefExternal ? "noreferrer" : undefined}
            onClick={() => event({ action: "href", category: "text_button", label: text, value: null })}
            className={"button text-button " + classButton}
            href={href}
            target={isHrefExternal ? "_blank" : "_self"}
        >
            <Text text={text} type="body" />
        </Link>
    );
}
