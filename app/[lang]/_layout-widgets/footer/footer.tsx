import footerColors from './footer.colors.module.css';
import footerStructure from './footer.structure.module.css';

import Logo from '../logo';

import dynamic from 'next/dynamic';

import { getDictionary } from "@/get-dictionary";

import Text from '@/app/_components/text/text';
import Chip from '@/app/_components/chip/chip';

const InfoApp = dynamic(() => import('../info-app'));
const SeeProject = dynamic(() => import('../see-project'));

export default async function Footer({
    lang,
}: {
    lang: string;
}) {
    const dictionary = (await getDictionary(lang)).common;

    return (
        <footer className={`${footerStructure.container} ${footerColors.baseBackgroundColor}`}>
            <div className={footerStructure.column}>
                <Text text="Template by Alejandro Zamora" />
                <InfoApp />

                <Chip text={dictionary.see_project}>
                    <SeeProject />
                </Chip>
            </div>

            <div className={footerStructure.column}>
                <Logo />

                <Text text={dictionary.developed_in} type="bodySmall" />
                <Chip text={dictionary.tag_google_analytics} />
            </div>
        </footer>
    );
}