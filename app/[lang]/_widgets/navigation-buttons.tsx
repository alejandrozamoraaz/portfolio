import style from '../layout.module.css'
import IconImage from '@/app/_components/icon-image'

import { navigateToSection } from '@/app/_lib/utils/navigate-to-section'
import { sections } from '@/app/_lib/data/sections'

export default function NavigationButtons({
    dictionary
}: {
    dictionary: {
        projectsSection: {
            title: string;
        },
        aboutSection: {
            title: string;
        },
        contactSection: {
            title: string;
        }
    };
}) {
    return (
        sections(dictionary).map((link) => {
            return (
                <button key={link.linkName} id={"#" + link.linkName} type="button" onClick={() => navigateToSection(link.linkName)} className={"button " + style.navigationButton}>
                    <IconImage classIcon={style.navigationIcon} iconUrl={link.iconUrl} iconAlt={link.iconAlt} />
                    <h6 className={style.navigationFontSize}>{link.name}</h6>
                </button>
            );
        })
    )
}
