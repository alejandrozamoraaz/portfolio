import { Dictionary, Section } from '@/app/_lib/definitions';

import { Projects as projectsIcon, About as aboutICon, Contact as contactIcon } from '@/app/_lib/icons';

import Projects from '@/app/[lang]/_sections/projects';
import About from '@/app/[lang]/_sections/about';
import Contact from '@/app/[lang]/_sections/contact';

export const sections = (
    t: Dictionary
): Section[] => {
    return [
        {
            linkName: 'Projects',
            icon: projectsIcon,
            name: t["projects_section"].title,
            content: Projects
        },
        {
            linkName: 'About',
            icon: aboutICon,
            name: t["about_section"].title,
            content: About
        },
        {
            linkName: 'Contact',
            icon: contactIcon,
            name: t["contact_section"].title,
            content: Contact
        },
    ]
};
