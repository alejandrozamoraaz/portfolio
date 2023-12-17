import Text from '@/app/_components/text/text'

export default function About({
    dictionary,
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
    return (
        <div className="row">
            <div className="col col-12">

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

                {/* <Text weight={600} classText="m-y-large" text={dictionary.aboutSection.skills} />

                <Text weight={600} classText="m-y-large" text={dictionary.aboutSection.badges} /> */}

            </div>
        </div>
    );
}
