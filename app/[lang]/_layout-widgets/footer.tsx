'use client'

import pkgJson from "@/package.json";

import Text from '@/app/_components/text/text';
import Chip from '@/app/_components/chip/chip';
import IconButton from '@/app/_components/buttons/icon-button/icon-button';
import Icon from "@/app/_components/icon/icon";

import { Github } from "@/app/_lib/icons";
import { gtagIconButtonHref } from '@/app/_lib/helpers/gtag-events';
import { Dictionary } from "@/app/_lib/definitions";

export default function Footer({
    t
}: {
    t: Dictionary["common"];
}) {
    return (
        <footer className="flex gap p-x p-y m-t-extra-large">
            <div className="col gap-small main-axis-between">
                <Text text="Template by Alejandro Zamora" type="body" />
                <Text type="bodySmall" text={`${pkgJson.name} ${pkgJson.version}`} />
                <Chip text={t.see_project}>
                    <IconButton title="Github"
                        hrefExternal="https://github.com/alejandrozamoraaz/portfolio"
                        type="secondary"
                        onClick={() => gtagIconButtonHref("navigate_to_portfolio_project_github")}
                    >
                        <Icon iconData={Github} />
                    </IconButton>
                </Chip>
            </div>

            <div className="col main-axis-between">
                <Text text={t.developed_in} type="body" classText="flex-end" />
                <div className="flex-end">
                    <Chip text={t.tag_google_analytics} />
                </div>
            </div>
        </footer>
    )
}