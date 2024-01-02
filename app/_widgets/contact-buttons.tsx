import IconButton from '@/app/_components/icon-button'

export default function ContactButtons() {
    return (
        <div className="flex gap">
            <IconButton
                href="https://github.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142331/icons/sllwivcceoufmztfw35m.png"
                iconAlt="Github - icon by Icons8"
            />
            <IconButton
                href="https://www.linkedin.com/in/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142331/icons/kq6fy2vylvb6lratn5wf.png"
                iconAlt="Linkedin - icon by Icons8"
            />
            <IconButton
                href="https://www.instagram.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142334/icons/p2f89owh0ftbor8o4s5a.png"
                iconAlt="Instagram - icon by Icons8"
            />
            <IconButton
                href="https://www.facebook.com/alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142333/icons/itqamy6g0fy3q1elbwy0.png"
                iconAlt="Facebook - icon by Icons8"
            />
            <IconButton
                href="https://www.threads.net/@alejandrozamoraaz"
                isHrefExternal={true}
                iconUrl="https://res.cloudinary.com/dlyfwab7x/image/upload/v1704142332/icons/urwqyabounygxf22dqxf.png"
                iconAlt="Threads - icon by Fahrul Saputra on IconScout"
            />
        </div>
    );
}