'use client'

import iconButtonStyle from '@/app/_components/icon_button/icon-button.module.css'
import layoutStyle from '@/app/[lang]/layout.module.css'

import IconImage from '@/app/_components/icon-image'

import { navigateToSection } from '@/app/_lib/utils/navigate-to-section'

export default function FloatAction() {
    return (
        <button id="#Header" type="button" onClick={() => navigateToSection("Header")} className={layoutStyle.floatAction + " button " + iconButtonStyle.iconButton}>
            <IconImage iconUrl="https://img.icons8.com/3d-fluency/94/up.png" iconAlt="Top - icon by Icons8" />
        </button>
    )
}
