import { getDictionary } from "@/get-dictionary";

import dynamic from 'next/dynamic';

import Image from 'next/image';

import Text from '@/app/_components/text/text';

const LinkedinProfile = dynamic(() => import('@/app/[lang]/_sections/widgets/linkedin-profile'));
const AboutIcon = dynamic(() => import('@/app/_lib/icons/about'));

export default async function About({
    lang,
}: {
    lang: string;
}) {
    const dictionary = (await getDictionary(lang)).about_section;

    return (
        <section className="col gap-large">
            <div className="flex gap cross-axis-center main-axis-center p-y-large">
                <AboutIcon className="icon-extralarge" />
                <Text text={dictionary.title} type="title" />
            </div>

            <div className="col gap p-x">
                <div>
                    <Text text={dictionary.about000} type="body" classText="display-inline-text" />
                    <Text text={dictionary.about011} type="bodyLarge" classText="display-inline-text gradient-color" />
                    <Text text={dictionary.about012} type="body" classText="display-inline-text" />
                    <Text text={dictionary.about013} type="bodyLarge" classText="display-inline-text primary-color" />
                    <Text text={dictionary.about014} type="body" classText="display-inline-text" />
                    <Text text={dictionary.about015} type="body" classText="display-inline-text secondary-color" />
                </div>

                <div className="flex">
                    <div className="col flex-1 p-y gap main-axis-center cross-axis-center">
                        <Text text={dictionary.about02} type="body" />

                        <LinkedinProfile />
                    </div>
                    <div className="col flex-1 main-axis-center cross-axis-center hidden-mobile">
                        <Image src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1713744595/vectors/left_cu5vvy.webp" alt="Abstract modern left - Image by freepik" width={400} height={400} />
                    </div>
                </div>

                <div className="flex">
                    <div className="col flex-1 main-axis-center cross-axis-center hidden-mobile">
                        <Image src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1713744589/vectors/right_qdr0q9.webp" alt="Abstract modern right - Image by freepik" width={400} height={400} />
                    </div>
                    <div className="col flex-1 main-axis-center">
                        <Text text={dictionary.about03} type="body" />
                    </div>
                </div>

            </div>
        </section>
    );
}
