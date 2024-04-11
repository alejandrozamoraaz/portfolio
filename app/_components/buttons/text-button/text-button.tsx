'use client'

import textButtonStructure from './text-button.structure.module.css';
import textButtonColors from './text-button.colors.module.css';

import Text from '@/app/_components/text/text';

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function TextButton({
    hrefExternal,
    text,
    onClick,
    classButton
}: {
    hrefExternal?: string;
    text: string;
    onClick?: (router: AppRouterInstance) => void;
    classButton?: String;
}) {
    const router = useRouter();
    const handleClick = () => {
        setTimeout(() => {
            onClick && onClick(router);
            hrefExternal && window.open(hrefExternal, '_blank');
        }, 300);
    };

    return (
        <button type="button"
            title={text}
            rel={hrefExternal ? "noreferrer" : undefined}
            onClick={handleClick}
            className={`button ${textButtonStructure.container} ${textButtonColors.surface} ${classButton}`}
        >
            <Text text={text} type="body" />
        </button>
    );
}
