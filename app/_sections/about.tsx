import Text from '@/app/_components/text/text'
import Chip from '@/app/_components/chip/chip'

import Skills from '@/app/_widgets/skills'
import Badges from '@/app/_widgets/badges'

export default function About({
    dictionary,
    isByAI,
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
    },
    isByAI: boolean
}) {
    return (
        <div className="row">
            <div className="col col-12">
                {isByAI && <Chip text="By AI" />}

                <Text weight={600} type="bodyLarge" text={dictionary.aboutSection.about01} />
                <Text weight={600} classText="m-y-large" text={dictionary.aboutSection.about02} />
                <div className="row">
                    <div className="col col-6">
                        <Text text={dictionary.aboutSection.about03} />
                    </div>
                    <div className="col col-6">
                        <Text text={dictionary.aboutSection.about04} />
                    </div>
                </div>

                <Skills dictionary={dictionary} />
                <Badges dictionary={dictionary} />
            </div>
        </div>
    );
}
