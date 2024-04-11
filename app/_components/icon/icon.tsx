import iconStructure from './icon.structure.module.css';

import { IconData, IconType } from '@/app/_lib/definitions';

export default function Icon({
    size = "normal",
    iconClass,
    iconData: IconData,
}: {
    size?: 'normal' | 'large' | 'extra-large';
    iconClass?: string;
    iconData: IconData;
}): IconType {

    const sizeClass = (() => {
        switch (size) {
            case "normal":
                return iconStructure.normal;
            case "large":
                return iconStructure.large;
            case "extra-large":
                return iconStructure.extraLarge;
        }
    })();

    return (
        <IconData className={`${sizeClass} ${iconClass}`} />
    );
}