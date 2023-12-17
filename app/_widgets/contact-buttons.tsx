import IconButton from '@/app/_components/icon_button/icon-button'

export default function ContactButtons() {
    return (
        <div className="row gap">
            <IconButton
                href="https://github.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://img.icons8.com/3d-fluency/94/github.png"
                iconAlt="Github - icon by Icons8"
            />
            <IconButton
                href="https://www.linkedin.com/in/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://img.icons8.com/3d-fluency/94/linkedin.png"
                iconAlt="Linkedin - icon by Icons8"
            />
            <IconButton
                href="https://www.instagram.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                iconAlt="Instagram - icon by Icons8"
            />
            <IconButton
                href="https://www.facebook.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://img.icons8.com/3d-fluency/94/facebook-circled.png"
                iconAlt="Facebook - icon by Icons8"
            />
        </div>
    );
}