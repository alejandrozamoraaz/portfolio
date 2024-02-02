import IconButton from '@/app/_components/icon-button'
import CopyToClipboard from '@/app/_widgets/copy-to-clipboard'

export default function ContactButtons() {
    return (
        <>
            <CopyToClipboard text="junioralejandrozamora.az@gmail.com" />
            <div className="flex gap">
                <IconButton
                    href="https://github.com/alejandrozamoraaz"
                    title="Github"
                    isHrefExternal={true}
                    imageIconProps={{
                        src: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142331/icons/sllwivcceoufmztfw35m.png",
                        alt: "Github - icon by Icons8"
                    }}
                />
                <IconButton
                    href="https://www.linkedin.com/in/alejandrozamoraaz"
                    title="Linkedin"
                    isHrefExternal={true}
                    imageIconProps={{
                        src: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142331/icons/kq6fy2vylvb6lratn5wf.png",
                        alt: "Linkedin - icon by Icons8"
                    }}
                />
            </div>
        </>
    );
}