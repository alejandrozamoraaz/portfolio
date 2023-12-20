'use client'

import { useEffect } from 'react'
import { Badge } from '@/app/_lib/definitions'

import Text from '@/app/_components/text/text'
import IconImage from '@/app/_components/icon-image'

import { Carousel } from '@fancyapps/ui'
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";

export default function Badges({
    dictionary,
}: {
    dictionary: {
        aboutSection: {
            badges: string
        }
    }
}) {
    const badges: Badge[] = [
        {
            name: "Unity Junior Programmer",
            imageUrl: "https://i.postimg.cc/59PRDpPJ/unity-junior-programmer.png",
            href: "https://www.credly.com/badges/f3aec58a-2568-4f4b-9ee3-e98da34986a0/public_url"
        },
        {
            name: "Unity Creative Core",
            imageUrl: "https://i.postimg.cc/5ytk6F2D/unity-creative-core.png",
            href: "https://www.credly.com/badges/7df6efb7-7279-4130-8bca-48622f240f85/public_url"
        },
        {
            name: "Unity Mobile AR Development",
            imageUrl: "https://i.postimg.cc/9Frn2TS7/unity-mobile-ar-development.png",
            href: "https://www.credly.com/badges/ab1141eb-2642-4c4d-a6e4-8619dacb2f74/public_url"
        },
        {
            name: "Scrum Foundation Professional Certification",
            imageUrl: "https://i.postimg.cc/5ykKvNHy/scrum-foundation-professional-certification-sfpc.png",
            href: "https://www.credly.com/badges/c9bea62f-5bdf-4d56-a4de-c83e03745002/public_url"
        },
        {
            name: "AWS Cloud Quest: Cloud Practitioner",
            imageUrl: "https://i.postimg.cc/LXDb9V2z/aws-cloud-quest-cloud-practitioner.png",
            href: "https://www.credly.com/badges/64706d66-220c-4461-b372-74dbaf3cdafa/public_url"
        }
    ];

    useEffect(() => {
        const carouselOptions = {
            Navigation: false,
            Autoplay: true
        };

        new Carousel(document.getElementById("badgesCarousel"), carouselOptions, { Autoplay });
    }, []);

    return (
        <>
            <Text weight={600} classText="m-y-large" text={dictionary.aboutSection.badges} />
            <div className="f-carousel" id="badgesCarousel">
                {badges.map((badge, index) => (
                    <a key={"badge_" + index} className="button col f-carousel__slide center" target="_blank" href={badge.href}>
                        <IconImage iconUrl={badge.imageUrl} iconAlt={badge.name} size="large" />
                        <Text type="bodySmall" text={badge.name} />
                    </a>
                ))}
            </div>
        </>
    );
}