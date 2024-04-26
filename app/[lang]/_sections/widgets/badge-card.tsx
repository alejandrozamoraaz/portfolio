'use client'

import { Badge, Dictionary } from "@/app/_lib/definitions";
import { gtagTextButtonHref } from '@/app/_lib/helpers/gtag-events';

import Image from 'next/image';

import Card from '@/app/_components/card/card';
import TextButton from '@/app/_components/buttons/text-button/text-button';

export default function BadgeCard({
    badge,
    dictionary
}: {
    badge: Badge;
    dictionary: Dictionary;
}) {
    return (
        <Card classCard="col cross-axis-center p-x p-y gap-small">
            <Image src={badge.imageUrl} alt={badge.alt} width={150} height={150} />
            <TextButton hrefExternal={badge.href} text={dictionary.common.see} onClick={() => gtagTextButtonHref("see_badge")} />
        </Card>
    );
}