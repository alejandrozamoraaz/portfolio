'use client'

import { useEffect } from 'react'
import Link from 'next/link'

import { sections } from '@/app/_lib/data/sections'
import { highlightNavigationButtonFromCurrentSection } from '@/app/_lib/utils/highlight-navigation-button-from-current-section'

import IconImage from '@/app/_components/icon-image'

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
    useEffect(() => {
        window.addEventListener("scroll", highlightNavigationButtonFromCurrentSection);
    }, []);

    return (
        <aside className="navigation">
            {sections(dictionary).map((link, index) => {
                return (
                    <Link key={index} target="_self" href={"#" + link.linkName} className="button navigation-button">
                        <IconImage classIcon="navigation-button-icon" iconUrl={link.iconUrl} iconAlt={link.iconAlt} />
                        <h6>{link.name}</h6>
                    </Link>
                );
            })}
        </aside>
    );
};
