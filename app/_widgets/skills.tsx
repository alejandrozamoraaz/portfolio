'use client'

import { useEffect } from 'react'

import Text from '@/app/_components/text/text'

import { Carousel } from '@fancyapps/ui'
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";

import { Kotlin, Figma, AdobeXd, DotNet, Css, Flutter, Unity, PowerBi, Sql, Python, Azure } from '@/app/_lib/icons-technologies'

export default function Skills({
    dictionary,
}: {
    dictionary: {
        aboutSection: {
            skills: string
        }
    }
}) {
    const skills = [
        <Kotlin width={48} height={48} />,
        <Figma width={48} height={48} />,
        <AdobeXd width={48} height={48} />,
        <DotNet width={48} height={48} />,
        <Css width={48} height={48} />,
        <Flutter width={48} height={48} />,
        <Unity width={48} height={48} />,
        <PowerBi width={48} height={48} />,
        <Sql width={48} height={48} />,
        <Python width={48} height={48} />,
        <Azure width={48} height={48} />
    ];

    useEffect(() => {
        const carouselOptions = {
            Navigation: false
        };

        new Carousel(document.getElementById("skillsCarousel"), carouselOptions, { Autoplay });
    }, []);

    return (
        <>
            <Text weight={600} classText="m-y-large" text={dictionary.aboutSection.skills} />
            <div className="f-carousel" id="skillsCarousel">
                {skills.map((skill, index) => (
                    <div key={index} className="f-carousel__slide horizontal-center">
                        {skill}
                    </div>
                ))}
            </div>
        </>
    );
}