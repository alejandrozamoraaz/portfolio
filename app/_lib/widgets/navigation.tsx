'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { sections } from '@/app/_lib/data/sections'

import Icon from '@/app/_components/icon'
import Text from '@/app/_components/text/text'

export default function Navigation() {
    const { t } = useTranslation();

    return (
        <aside className="navigation">
            {sections(t).map((link, index) => {
                const style = {
                    '--navigation-index': index + 2,
                } as any;

                return (
                    <Link key={index} style={style} target="_self" href={`#${link.linkName}`} className="button navigation-button">
                        <Icon classIcon="navigation-button-icon" imageIconProps={{ src: link.iconUrl, alt: link.iconAlt }} />
                        <Text type="bodySmall" weight={300} text={link.name} />
                    </Link>
                );
            })}
        </aside>
    );
};
