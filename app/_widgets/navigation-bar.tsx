'use client'

import style from '../layout.module.css'

import { useEffect } from 'react';

import { highlightNavigationButtonFromCurrentSection } from '@/app/_lib/utils/highlight-navigation-button-from-current-section'

import NavigationButtons from './navigation-buttons'

export default function NavigationBar({
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
        <div className={style.navigationBar + " justify-evenly"}>
            <NavigationButtons dictionary={dictionary} />
        </div>
    );
};
