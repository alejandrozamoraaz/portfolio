'use client'

import dynamic from 'next/dynamic';

import IconButton from '@/app/_components/buttons/icon-button/icon-button';

import { gtagIconButtonHref } from '@/app/_lib/helpers/gtag-events';

const GithubIcon = dynamic(() => import('@/app/_lib/icons/github'));

export default function SeeProject() {
    return (
        <IconButton title="Github"
            hrefExternal="https://github.com/alejandrozamoraaz/portfolio"
            type="secondary"
            onClick={() => gtagIconButtonHref("navigate_to_portfolio_project_github")}
        >
            <GithubIcon className="icon" />
        </IconButton>
    );
}