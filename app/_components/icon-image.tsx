import Image from 'next/image';

export default function IconImage({
    iconUrl,
    iconAlt,
    size,
    classIcon,
}: {
    iconUrl: string;
    iconAlt: string;
    size?: "large" | undefined;
    classIcon?: string;
}) {
    const iconSize = size != "large" ? 32 : 48;
    return (
        <Image
            src={iconUrl}
            alt={iconAlt}
            className={classIcon}
            style={{
                position: "relative"
            }}
            width={iconSize}
            height={iconSize}
            priority
        />
    );
}
