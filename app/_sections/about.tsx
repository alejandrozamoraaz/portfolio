'use client'

import { useEffect } from 'react'
import { Carousel } from '@fancyapps/ui'
import { TFunction } from 'i18next'

import Text from '@/app/_components/text/text'
import Icon from '@/app/_components/icon'
import TextButton from '@/app/_components/text-button'

import { renderToString } from '@/app/_lib/utils/render-to-string'
import { skills } from '@/app/_lib/data/skills'
import { badges } from '@/app/_lib/data/badges'

export default function About(
    { t }: {
        t: TFunction<[]>;
    }
) {
    useEffect(() => {
        const skillsCarousel = new Carousel(
            document.getElementById("skillsCarousel"),
            {
                Navigation: false,
                classes: {
                    slide: "f-carousel__slide mini-carousel-slide main-axis-center cross-axis-center"
                }
            }
        );
        skills.map((Skill) => {
            renderToString(
                <Icon svgIconProps={{ svgContent: Skill }} size="large" />
            ).then((text) => skillsCarousel.appendSlide({ html: text }));
        });

        const badgesCarousel = new Carousel(
            document.getElementById("badgesCarousel"),
            {
                Navigation: false,
                classes: {
                    slide: "f-carousel__slide mini-carousel-slide main-axis-center cross-axis-center col gap-small"
                }
            }
        );

        badges.map((badge) => {
            renderToString(
                <>
                    <Icon imageIconProps={{ src: badge.imageUrl, alt: badge.alt }} size="large" />
                    <TextButton href={badge.href} isHrefExternal={true} text={t("see", { ns: "common" })} />
                </>
            ).then((text) => badgesCarousel.appendSlide({ html: text }));
        });
    }, [t]);

    return (
        <div className="col gap line-height-large">
            <div>
                <Text text="Junior Alejandro Zamora Navarrete" classText="display-inline" />
                <Text text={t('about011', { ns: 'about_section' })} type="bodyLarge" classText="primary-color display-inline" />
                <Text text={t('about012', { ns: 'about_section' })} classText="display-inline" />
                <Text text={t('about013', { ns: 'about_section' })} type="bodyLarge" classText="primary-highlight-color display-inline" />
                <Text text={t('about014', { ns: 'about_section' })} classText="display-inline" />
                <Text text={t('about015', { ns: 'about_section' })} weight={900} classText="secondary-highlight-color display-inline" />
            </div>

            <Text text={t('about02', { ns: 'about_section' })} />

            <div className="flex">
                <div className="col">
                    <Text text={t('about03', { ns: 'about_section' })} />
                </div>
                <div className="col">
                    <Text text={t('about04', { ns: 'about_section' })} />
                </div>
            </div>

            <Text classText="m-y-large" type="bodyLarge" text={t('skills', { ns: 'about_section' })} />
            <div id="skillsCarousel" className="f-carousel"></div>

            <Text classText="m-y-large" type="bodyLarge" text={t('badges', { ns: 'about_section' })} />
            <div id="badgesCarousel" className="f-carousel"></div>
        </div>
    );
}
