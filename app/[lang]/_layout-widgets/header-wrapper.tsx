import Image from 'next/image'
import LanguageSelector from '@/app/[lang]/_sections/widgets/LanguageSelector'

import { Dictionary } from '@/app/_lib/definitions';

export default function HeaderWrapper({ t }: {
    t: Dictionary["common"];
}) {
    return (
        <header id="Header" className="flex cross-axis-center main-axis-between header-wrapper">
            <div className="flex brand">
                <Image
                    src="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704135888/vtqcg6xuptsud5hkx1te.png"
                    alt="Logo Alejandro Zamora"
                    width={32}
                    height={21}
                />
            </div>

            <div className="flex actions">
                <LanguageSelector t={t} />
            </div>
        </header>
    )
}