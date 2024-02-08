'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { sections } from '@/app/_lib/data/sections'

import Icon from '@/app/_components/icon'
import Text from '@/app/_components/text/text'

import { event } from '@/app/_lib/utils/gtag'

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <aside className="flex navigation">
            {sections(t).map((link, index) => {
                const style = {
                    '--navigation-index': index + 2,
                } as any;

                return (
                    <Link
                        key={index}
                        style={style}
                        target="_self"
                        href={`#${link.linkName}`}
                        className="button navigation-button"
                        onClick={() => event({ action: "href", category: "menu_button", label: `Go to ${link.linkName}`, value: null })}
                    >
                        <Icon classIcon="navigation-button-icon" imageIconProps={{ src: link.iconUrl, alt: link.iconAlt }} />
                        <Text type="bodySmall" weight={900} text={link.name} />
                    </Link>
                );
            })}
        </aside>
    );
};
