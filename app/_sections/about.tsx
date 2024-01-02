'use client'

import { useEffect } from 'react'
import { Carousel } from '@fancyapps/ui'
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js"

import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip'
import IconImage from '@/app/_components/icon-image'
import TextButton from '@/app/_components/text-button'

import { renderToString } from '@/app/_lib/utils/render-to-string'
import { skills } from '@/app/_lib/data/skills'
import { badges } from '@/app/_lib/data/badges'

export default function About({
    dictionary
}: {
    dictionary: {
        aboutSection: {
            about01: string,
            about02: string,
            about03: string,
            about04: string,
            skills: string,
            badges: string
        }
    }
}) {
    useEffect(() => {
        const skillsCarousel = new Carousel(
            document.getElementById("skillsCarousel"),
            {
                Navigation: false,
                classes: {
                    slide: "f-carousel__slide mini-carousel-slide main-axis-center cross-axis-center"
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
        autoPlay.start();


        const badgesCarousel = new Carousel(
            document.getElementById("badgesCarousel"),
            {
                Navigation: false,
                classes: {
                    slide: "f-carousel__slide mini-carousel-slide main-axis-center cross-axis-center col gap-small"
                }
            },
            { Autoplay }
        );

        badges.map((badge) => {
            renderToString(
                <>
                    <IconImage iconUrl={badge.imageUrl} iconAlt={badge.alt} size="large" />
                    <TextButton href={badge.href} isHrefExternal={true} text="See" />
                </>
            ).then((text) => badgesCarousel.appendSlide({ html: text }));
        });
    }, []);

    return (
        <div className="col gap">
            <div className="p-y p-x" style={{ position: "absolute", top: "0", right: "0" }}>
                <Chip text="By AI" />
            </div>

            <Text text={dictionary.aboutSection.about01} type="bodyLarge" />
            <Text text={dictionary.aboutSection.about02} />

            <div className="flex">
                <div className="col">
                    <Text text={dictionary.aboutSection.about03} />
                </div>
                <div className="col">
                    <Text text={dictionary.aboutSection.about04} />
                </div>
            </div>

            <Text type="bodyLarge" text={dictionary.aboutSection.skills} />
            <div id="skillsCarousel" className="f-carousel"></div>

            <Text type="bodyLarge" text={dictionary.aboutSection.badges} />
            <div id="badgesCarousel" className="f-carousel"></div>
        </div>
    );
}
