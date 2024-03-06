import Image from 'next/image'
import { SvgIconProps, ImageIconProps } from '@/app/_lib/definitions'

export default function Icon(
    {
        size,
        classIcon,
        imageIconProps,
        svgIconProps
    }
        : {
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

    if (imageIconProps) {
        return <ImageIcon props={imageIconProps!} size={iconSize} classIcon={classIcon} />;
    } else {
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
    <props.svgContent className={classIcon} width={size} height={size} />
);
