'use client'

import iconButtonColors from './icon-button.colors.module.css';
import iconButtonStructure from './icon-button.structure.module.css';

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function IconButton({
    title,
    hrefExternal,
    onClick,
    isFloat,
    classButton,
    type = 'primary',
    children,
}: {
    title: string;
    hrefExternal?: string;
    onClick?: (router: AppRouterInstance) => void;
    isFloat?: boolean;
    classButton?: string;
    type?: 'primary' | 'secondary';
    children: JSX.Element;
}) {
    const router = useRouter();
    const typeColor = (() => {
        switch (type) {
            case 'primary':
                return iconButtonColors.primary;
            case 'secondary':
                return iconButtonColors.secondary;
        }
    })();

    const handleClick = () => {
        setTimeout(() => {
            onClick && onClick(router);
            hrefExternal && window.open(hrefExternal, '_blank');
        }, 300);
    };

    return (
        <button type="button"
            title={title}
            rel={hrefExternal ? "noreferrer" : undefined}
            onClick={handleClick}
            className={`button ${typeColor} ${isFloat ? iconButtonStructure.floatContainer : iconButtonStructure.normalContainer} ${classButton}`}
        >
            {children}
        </button>
    );
}
