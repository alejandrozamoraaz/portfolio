import headerStructure from './header.structure.module.css';
import headerEffects from './header.effects.module.css';

import Image from 'next/image';

import LanguageSelector from '@/app/[lang]/_sections/widgets/LanguageSelector';

export default function Header() {
    return (
        <header id="header" className={`flex cross-axis-center main-axis-between ${headerStructure.container}`}>
            <div className={`flex ${headerStructure.brand} ${headerEffects.rotate}`}>
                <Image
                    src="/v1704135888/vtqcg6xuptsud5hkx1te"
                    alt="Logo Alejandro Zamora"
                    width={32}
                    height={21}
                />
            </div>

            <div className={`flex ${headerStructure.actions}`}>
                <LanguageSelector />
            </div>
        </header>
    )
}