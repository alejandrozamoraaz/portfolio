import Image from 'next/image'
import Text from '@/app/_components/text/text'
import ContactButtons from '@/app/_widgets/contact-buttons'
import Typewriter from '@/app/_widgets/typewriter'

export default function Header({
    dictionary,
}: {
    dictionary: {
        headerSection: {
            iam: string,
            architect: string,
            developer: string,
            designer: string,
            analyst: string
        }
    }
}) {
    return (
        <div className="row">
            <div className="col col-11">
                <Text text="Ing." />
                <Text text="Junior Alejandro Zamora" type="headline" weight={900} />

                <div className="m-y">
                    <Text text={dictionary.headerSection.iam} />
                    <Typewriter words={[
                        dictionary.headerSection.architect,
                        dictionary.headerSection.developer,
                        dictionary.headerSection.designer,
                        dictionary.headerSection.analyst
                    ]} />
                </div>

                <ContactButtons />
            </div>

            <div className="col col-1">
                <Image
                    src="https://i.postimg.cc/cHyXFGB2/profile2160.png"
                    alt="Profile"
                    style={{
                        position: "absolute",
                        right: "0px",
                        top: "0px",
                        zIndex: "-1",
                    }}
                    priority
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
