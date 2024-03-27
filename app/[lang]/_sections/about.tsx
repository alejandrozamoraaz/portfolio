import Image from 'next/image'

import Text from '@/app/_components/text/text'
import TextButton from '@/app/_components/text-button'

import { badges } from '@/app/_lib/data/badges'
import { Dictionary } from '@/app/_lib/definitions'

export default function About(
    { t }: {
        t: Dictionary;
    }
) {
    return (
        <div className="col gap">
            <div>
                <Text text={t.about_section.about000} type="body" classText="display-inline line-height-large" />
                <Text text={t.about_section.about011} type="bodyLarge" classText="display-inline gradient-color" />
                <Text text={t.about_section.about012} type="body" classText="display-inline line-height-large" />
                <Text text={t.about_section.about013} type="bodyLarge" classText="display-inline primary-color" />
                <Text text={t.about_section.about014} type="body" classText="display-inline line-height-large" />
                <Text text={t.about_section.about015} type="body" classText="display-inline line-height-large secondary-color" />
            </div>

            <div className="flex gap line-height-large">
                <div className="col">
                    <Text text={t.about_section.about02} type="body" />
                </div>
                <div className="col">
                    <Text text={t.about_section.about03} type="body" />
                </div>
            </div>

            <Text classText="m-y-large" type="bodyLarge" text={t.about_section.badges} />
            <div className="badges-grid gap-small">
                {badges.map((badge, index) => (
                    <div key={index} className="badge-card col cross-axis-center p-x p-y gap-small" >
                        <Image src={badge.imageUrl} alt={badge.alt} width={100} height={100} />
                        <TextButton href={badge.href} isHrefExternal={true} text={t.common.see} />
                    </div>
                ))}
            </div>
        </div>
    );
}
