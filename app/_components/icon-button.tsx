'use client'

import Link from 'next/link'

import { event } from '@/app/_lib/helpers/gtag'
import { ReactElement } from 'react';

export default function IconButton({
    title,
    href,
    isHrefExternal,
    onClick,
    isFloat,
    classButton,
    children,
}: {
    title: string;
    href?: string;
    isHrefExternal?: boolean;
    onClick?: () => void;
    isFloat?: boolean;
    classButton?: string;
    children: ReactElement<SVGAElement> | ReactElement<SVGSVGElement>;
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

    return (
        href ?
            <Link {...buttonProps} href={href} rel={isHrefExternal ? "noreferrer" : undefined} target={isHrefExternal ? "_blank" : "_self"}>
                {children}
            </Link>
            :
            <button type="button" {...buttonProps}>
                {children}
            </button>
    );
}
