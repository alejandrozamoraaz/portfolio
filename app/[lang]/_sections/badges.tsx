import { getDictionary } from "@/get-dictionary";

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { badges } from '@/app/_lib/data/badges';

import Text from '@/app/_components/text/text';

const BadgeCard = dynamic(() => import('@/app/[lang]/_sections/widgets/badge-card'));
const BadgeIcon = dynamic(() => import('@/app/_lib/icons/badge'));

export default async function Badges({
    lang,
}: {
    lang: string;
}) {
    const dictionary = await getDictionary(lang);

    return (
        <section className="flex gap-small">
            <div className="col flex-auto p-x">
                <div className="flex gap cross-axis-center main-axis-center p-y-large">
                    <BadgeIcon className="icon-extralarge" />
                    <Text type="title" text={dictionary.about_section.badges} />
                </div>

                <div className="custom-badges-grid gap-small">
                    {badges.map((badge, index) => (
                        <BadgeCard key={index} badge={badge} dictionary={dictionary} />
                    ))}
                </div>
            </div>

            <div className="col flex-auto hidden-mobile custom-position-relative">
                <Image className="custom-fill-badge-image" src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1713744651/vectors/gradient_lines_total_mterfv.webp" alt="Gradient lines full - Image by freepik" fill sizes="100vh" />
            </div>
        </section>
    );
}