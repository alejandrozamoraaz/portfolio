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
    const skills: JSX.Element[] = [
        <Kotlin key="kotlin" width={48} height={48} />,
        <Figma key="figma" width={48} height={48} />,
        <AdobeXd key="adobexd" width={48} height={48} />,
        <DotNet key="dotnet" width={48} height={48} />,
        <Css key="css" width={48} height={48} />,
        <Flutter key="flutter" width={48} height={48} />,
        <Unity key="unity" width={48} height={48} />,
        <PowerBi key="powerbi" width={48} height={48} />,
        <Sql key="sql" width={48} height={48} />,
        <Python key="pyton" width={48} height={48} />,
        <Azure key="azure" width={48} height={48} />
    ];

    useEffect(() => {
        const carouselOptions = {
            Navigation: false,
            Autoplay: true
        };

        new Carousel(document.getElementById("skillsCarousel"), carouselOptions, { Autoplay });
    }, []);

    return (
        <>
            <Text weight={600} classText="m-y-large" text={dictionary.aboutSection.skills} />
            <div className="f-carousel" id="skillsCarousel">
                {skills.map((skill, index) => (
                    <div key={"skill_" + index} className="f-carousel__slide horizontal-center">
                        {skill}
                    </div>
                ))}
            </div>
        </>
    );
}