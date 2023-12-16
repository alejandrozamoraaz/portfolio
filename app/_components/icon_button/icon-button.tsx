import Link from 'next/link'
import style from './icon-button.module.css'
import IconImage from '@/app/_components/icon-image'

export default function IconButton({
    href,
    isHrefExternal,
    iconUrl,
    iconAlt,
    classButton
}: {
    href: string;
    isHrefExternal?: boolean;
    iconUrl: string;
    iconAlt: string;
    classButton?: String;
}) {
    return (
        <Link className={"button " + style.iconButton + " " + classButton} href={href} target={isHrefExternal ? "_blank" : "_self"}>
            <IconImage iconUrl={iconUrl} iconAlt={iconAlt} />
        </Link>
    );
}
