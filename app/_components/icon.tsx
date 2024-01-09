import Image from 'next/image'
import { SvgIconProps, ImageIconProps } from '@/app/_lib/definitions'

export default function Icon(
    {
        type,
        size,
        classIcon,
        imageIconProps,
        svgIconProps
    }
        : {
            type: 'svg' | 'img';
            size?: "large" | undefined;
            classIcon?: string;
            imageIconProps?: ImageIconProps;
            svgIconProps?: SvgIconProps;
        }
) {
    const iconSize = (() => {
        switch (size) {
            case "large":
                return 48;
            default:
                return 32;
        }
    })();

    switch (type) {
        case 'img':
            return <ImageIcon props={imageIconProps!} size={iconSize} classIcon={classIcon} />;
        case 'svg':
            return <SvgIcon props={svgIconProps!} size={iconSize} classIcon={classIcon} />;
    }
}

const ImageIcon = ({ props, size, classIcon }: { props: ImageIconProps; size: number; classIcon?: string; }): JSX.Element => (
    <Image
        src={props.src}
        alt={props.alt}
        className={classIcon}
        width={size}
        height={size}
    />
);

const SvgIcon = ({ props, size, classIcon }: { props: SvgIconProps; size: number; classIcon?: string; }): JSX.Element => (
    <props.svgContent className={classIcon} style={{ minWidth: size, minHeight: size }} width={size} height={size} />
);
