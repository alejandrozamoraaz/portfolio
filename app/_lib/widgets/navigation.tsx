import Link from 'next/link'

import { sections } from '@/app/_lib/data/sections'

import Icon from '@/app/_components/icon'

export default function Navigation({
    dictionary
}: {
    dictionary: {
        projectsSection: {
            title: string;
        };
        aboutSection: {
            title: string;
        };
        contactSection: {
            title: string;
        };
    };
}) {
    return (
        <aside className="navigation">
            {sections(dictionary).map((link, index) => {
                return (
                    <Link key={index} target="_self" href={`#${link.linkName}`} className="button navigation-button">
                        <Icon classIcon="navigation-button-icon" type="img" imageIconProps={{ src: link.iconUrl, alt: link.iconAlt }} />
                        <h6>{link.name}</h6>
                    </Link>
                );
            })}
        </aside>
    );
};
