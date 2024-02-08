'use client'

import Link from 'next/link'
import Icon from '@/app/_components/icon'
import { SvgIconProps, ImageIconProps } from '@/app/_lib/definitions'

import { event } from '@/app/_lib/utils/gtag'

export default function IconButton({
    title,
    href,
    isHrefExternal,
    onClick,
    isFloat,
    classButton,
    imageIconProps,
    svgIconProps
}: {
    title: string;
    href?: string;
    isHrefExternal?: boolean;
    onClick?: () => void;
    isFloat?: boolean;
    classButton?: string;
    imageIconProps?: ImageIconProps;
    svgIconProps?: SvgIconProps;
}) {
    const handleClick = () => {
        const action = href ? 'href' : 'click';
        event({ action, category: 'icon_button', label: title, value: null });
        if (onClick) onClick();
    };

    const buttonProps = {
        title: title,
        onClick: handleClick,
        className: `button ${isFloat ? 'float-button' : 'icon-button'} ${classButton}`
    };

    const IconButton = <Icon imageIconProps={imageIconProps} svgIconProps={svgIconProps} />

    return (
        href ?
            <Link href={href} rel={isHrefExternal ? "noreferrer" : undefined} target={isHrefExternal ? "_blank" : "_self"} {...buttonProps}>
                {IconButton}
            </Link>
            :
            <button type="button" {...buttonProps}>
                {IconButton}
            </button>
    );
}
