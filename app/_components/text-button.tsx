import Link from 'next/link'
import Text from '@/app/_components/text/text'

export default function TextButton({
    href,
    isHrefExternal,
    text,
    classButton
}: {
    href: string;
    isHrefExternal?: boolean;
    text: string;
    classButton?: String;
}) {
    return (
        <Link rel={isHrefExternal ? "noreferrer" : undefined} className={"button text-button " + classButton} href={href} target={isHrefExternal ? "_blank" : "_self"}>
            <Text text={text} />
        </Link>
    );
}
