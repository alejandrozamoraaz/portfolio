'use client'

import { useEffect } from 'react'

import { renderToString } from '@/app/_lib/utils/render-to-string'

import Text from '@/app/_components/text/text'
import IconImage from '@/app/_components/icon-image'
import Chip from '@/app/_components/chip/chip'

import { Carousel } from '@fancyapps/ui'
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"

import { badges } from '@/app/_lib/data/badges'

export default function Badges({
    dictionary,
}: {
    dictionary: {
        common: {
            goTo: string
        },
        aboutSection: {
            badges: string
        }
    }
}) {
    useEffect(() => {
        const badgesCarousel = new Carousel(
            document.getElementById("badgesCarousel"),
            {
                Navigation: false,
                classes: {
                    slide: "f-carousel__slide horizontal-center mini-carousel-slide"
                }
            },
            { Autoplay }
        );

        badges.map((badge) => {
            renderToString(
                <a className="button col gap" target="_blank" href={badge.href}>
                    <IconImage iconUrl={badge.imageUrl} iconAlt={badge.name} size="large" />
                    <Chip text={dictionary.common.goTo} />
                </a>
            ).then((text) => badgesCarousel.appendSlide({ html: text }));
        });
    }, []);

    return (
        <>
            <Text weight={600} type="bodyLarge" classText="m-y-large" text={dictionary.aboutSection.badges} />
            <div id="badgesCarousel" className="f-carousel"></div>
        </>
    );
}