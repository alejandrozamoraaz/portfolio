'use client'

import { useEffect } from 'react'
import { Carousel } from '@fancyapps/ui'

import Text from '@/app/_components/text/text'
import Icon from '@/app/_components/icon'
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
            about011: string,
            about012: string,
            about013: string,
            about014: string,
            about015: string,
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
            }
        );
        skills.map((Skill) => {
            renderToString(
                <Icon type="svg" svgIconProps={{ svgContent: Skill }} size="large" />
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
                    <Icon type="img" imageIconProps={{ src: badge.imageUrl, alt: badge.alt }} size="large" />
                    <TextButton href={badge.href} isHrefExternal={true} text="See" />
                </>
            ).then((text) => badgesCarousel.appendSlide({ html: text }));
        });
    }, []);

    return (
        <div className="col gap">
            <div>
                <Text text="Junior Alejandro Zamora Navarrete" type="title" classText="display-inline" />
                <Text text={dictionary.aboutSection.about011} type="bodyLarge" classText="primary-color display-inline" />
                <Text text={dictionary.aboutSection.about012} classText="display-inline" />
                <Text text={dictionary.aboutSection.about013} type="bodyLarge" classText="primary-highlight-color display-inline" />
                <Text text={dictionary.aboutSection.about014} classText="display-inline" />
                <Text text={dictionary.aboutSection.about015} type="bodyLarge" classText="secondary-highlight-color display-inline" />
            </div>
            <Text text={dictionary.aboutSection.about02} />

            <div className="flex">
                <div className="col">
                    <Text text={dictionary.aboutSection.about03} />
                </div>
                <div className="col">
                    <Text text={dictionary.aboutSection.about04} />
                </div>
            </div>


            <br /><br />
            <br />
            {/* Junior Alejandro Zamora Navarrete es un ingeniero apasionado con un enfoque vanguardista y habilidades destacadas en diseño, arquitectura y desarrollo de software y videojuegos, realidad virtual, aumentada, desarrollo de IA y análisis de datos. */}
            {/* Comprometido con la excelencia y el crecimiento continuo, destaca por su capacidad para abordar proyectos desafiantes con entusiasmo y adaptarse a entornos dinámicos */}
            {/* Con una dedicación inquebrantable a la calidad, Zamora aporta creatividad y versatilidad a cada tarea, siendo reconocido por su capacidad para ofrecer soluciones innovadoras. */}
            {/* Su combinación única de habilidades técnicas y creativas lo convierte en un recurso valioso para proyectos que requieren un enfoque integral y una mentalidad proactiva. */}





            <Text type="bodyLarge" text={dictionary.aboutSection.skills} />
            <div id="skillsCarousel" className="f-carousel"></div>

            <Text type="bodyLarge" text={dictionary.aboutSection.badges} />
            <div id="badgesCarousel" className="f-carousel"></div>
        </div>
    );
}
