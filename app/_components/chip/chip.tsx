import structureChip from './chip.structure.module.css';
import colorsChip from './chip.colors.module.css';

import Text from '@/app/_components/text/text';

export default function Chip({
    text,
    children
}: {
    text?: string;
    children?: JSX.Element;
}) {
    return (
        <div className={`${structureChip.container} ${colorsChip.primary} gap-small`}>
            {children}

            {text && <Text type="bodySmall" text={text} />}
        </div>
    );
}
