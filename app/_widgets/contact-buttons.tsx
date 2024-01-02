import IconButton from '@/app/_components/icon-button'

export default function ContactButtons() {
    return (
        <div className="flex gap">
            <IconButton
                href="https://github.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="icons/sllwivcceoufmztfw35m"
                iconAlt="Github - icon by Icons8"
            />
            <IconButton
                href="https://www.linkedin.com/in/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="icons/kq6fy2vylvb6lratn5wf"
                iconAlt="Linkedin - icon by Icons8"
            />
            <IconButton
                href="https://www.instagram.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="icons/p2f89owh0ftbor8o4s5a"
                iconAlt="Instagram - icon by Icons8"
            />
            <IconButton
                href="https://www.facebook.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="icons/itqamy6g0fy3q1elbwy0"
                iconAlt="Facebook - icon by Icons8"
            />
            <IconButton
                href="https://www.threads.net/@alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="icons/urwqyabounygxf22dqxf"
                iconAlt="Threads - icon by Fahrul Saputra on IconScout"
            />
        </div>
    );
}