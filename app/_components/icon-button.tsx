import Link from 'next/link'
import IconImage from '@/app/_components/icon-image'

export default function IconButton({
    href,
    isHrefExternal,
    iconUrl,
    iconAlt,
    classButton,
    scroll
}: {
    href: string;
    isHrefExternal?: boolean;
    iconUrl: string;
    iconAlt: string;
    classButton?: String;
    scroll?: boolean;
}) {
    return (
        <Link className={"button icon-button " + classButton} href={href} rel={isHrefExternal ? "noreferrer" : undefined} target={isHrefExternal ? "_blank" : "_self"}>
            <IconImage iconUrl={iconUrl} iconAlt={iconAlt} />
        </Link>
    );
}
