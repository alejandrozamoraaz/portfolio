import IconButton from '@/app/_components/icon-button'
import CopyToClipboard from '@/app/[lang]/_sections/widgets/copy-to-clipboard'

import { Github, Linkedin } from '@/app/_lib/icons'

import { Dictionary } from '@/app/_lib/definitions'

export default function ContactButtons({ t, actionsClass: buttonGroupClass }: { t: Dictionary["common"], actionsClass?: string }) {
    return (
        <>
            <CopyToClipboard text="junioralejandrozamora.az@gmail.com" t={t} />
            <div className={`flex gap ${buttonGroupClass}`}>
                <IconButton
                    href="https://github.com/alejandrozamoraaz"
                    title="Go to link Github"
                    isHrefExternal={true}
                >
                    <Github className="icon" />
                </IconButton>
                <IconButton
                    href="https://www.linkedin.com/in/alejandrozamoraaz"
                    title="Go to link Linkedin"
                    isHrefExternal={true}
                >
                    <Linkedin className="icon" />
                </IconButton>
            </div>
        </>
    );
}