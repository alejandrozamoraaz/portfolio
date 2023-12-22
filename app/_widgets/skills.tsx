'use client'

import { useEffect } from 'react'

import { renderToString } from '@/app/_lib/utils/render-to-string'

import Text from '@/app/_components/text/text'

import { Carousel } from '@fancyapps/ui'
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"

import { skills } from '@/app/_lib/data/skills'

export default function Skills({
    dictionary,
}: {
    dictionary: {
        aboutSection: {
            skills: string
        }
    }
}) {
    useEffect(() => {
        const skillsCarousel = new Carousel(
            document.getElementById("skillsCarousel"),
            {
                Navigation: false,
                classes: {
                    slide: "f-carousel__slide horizontal-center mini-carousel-slide"
                }
            },
            { Autoplay }
        );
        skills.map((Skill) => {
            renderToString(
                <Skill width={48} height={48} />
            ).then((text) => skillsCarousel.appendSlide({ html: text }));
        });

        const autoPlay = new Autoplay(skillsCarousel, Autoplay.defaults);
        autoPlay.toggle();
    }, []);

    return (
        <>
            <Text weight={600} type="bodyLarge" classText="m-y-large" text={dictionary.aboutSection.skills} />
            <div id="skillsCarousel" className="f-carousel"></div>
        </>
    );
}

