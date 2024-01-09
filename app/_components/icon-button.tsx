'use client'

import Link from 'next/link'
import Icon from '@/app/_components/icon'
import { SvgIconProps, ImageIconProps } from '@/app/_lib/definitions'

export default function IconButton({
    href,
    isHrefExternal,
    onClick,
    isFloat,
    classButton,
    iconType,
    imageIconProps,
    svgIconProps
}: {
    href?: string;
    isHrefExternal?: boolean;
    onClick?: () => void;
    isFloat?: boolean;
    classButton?: String;
    iconType: 'svg' | 'img';
    imageIconProps?: ImageIconProps;
    svgIconProps?: SvgIconProps;
}) {
    return (
        href ?
            <Link className={`button ${isFloat ? "float-button" : "icon-button"} ${classButton}`} href={href} rel={isHrefExternal ? "noreferrer" : undefined} target={isHrefExternal ? "_blank" : "_self"}>
                <Icon type={iconType} imageIconProps={imageIconProps} svgIconProps={svgIconProps} />
            </Link>
            :
            <button type="button" onClick={onClick} className={`button ${isFloat ? "float-button" : "icon-button"} ${classButton}`}>
                <Icon type={iconType} imageIconProps={imageIconProps} svgIconProps={svgIconProps} />
            </button>
    );
}
