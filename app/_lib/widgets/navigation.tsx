'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { sections } from '@/app/_lib/data/sections'

import Icon from '@/app/_components/icon'

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
                        <Icon classIcon="navigation-button-icon" type="img" imageIconProps={{ src: link.iconUrl, alt: link.iconAlt }} />
                        <h6>{link.name}</h6>
                    </Link>
                );
            })}
        </aside>
    );
};
