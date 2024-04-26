import headerStructure from './header.structure.module.css';
import headerEffects from './header.effects.module.css';

import Logo from '../logo';

import dynamic from 'next/dynamic';

const LanguageSelector = dynamic(() => import('@/app/[lang]/_sections/widgets/LanguageSelector'));

export default function Header() {
    return (
        <header id="header" className={headerStructure.container}>
            <div className={`${headerStructure.brand} ${headerEffects.rotate}`}>
                <Logo />
            </div>

            <div className={headerStructure.actions}>
                <LanguageSelector />
            </div>
        </header>
    );
}