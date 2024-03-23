import pkgJson from "@/package.json"

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import IconButton from '@/app/_components/icon-button'
import { Github } from "@/app/_lib/icons"

import { Dictionary } from "@/app/_lib/definitions"

export default function FooterWrapper({
    t
}: {
    t: Dictionary["common"];
}) {
    return (
        <footer className="flex gap p-x p-y m-t-extra-large">
            <div className="col gap-small main-axis-between">
                <Text text="Template by Alejandro Zamora" type="body" />
                <Text type="bodySmall" text={`${pkgJson.name} ${pkgJson.version}`} />
                <Chip
                    content={
                        <IconButton title="Github"
                            isHrefExternal={true}
                            href="https://github.com/alejandrozamoraaz/portfolio"
                        >
                            <Github className="icon" />
                        </IconButton>
                    }
                    text={t.see_project}
                />
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