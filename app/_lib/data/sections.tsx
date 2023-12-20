import Projects from '@/app/_sections/projects'
import About from '@/app/_sections/about'
import Contact from '@/app/_sections/contact'

export const sections = (dictionary: {
    projectsSection: {
        title: string;
    },
    aboutSection: {
        title: string;
    },
    contactSection: {
        title: string;
    }
}) => {
    return [
        // {
        //     linkName: 'Projects',
        //     iconUrl: 'https://img.icons8.com/3d-fluency/94/news.png',
        //     iconAlt: dictionary.projectsSection.title + ' - icon by Icons8',
        //     name: dictionary.projectsSection.title,
        //     content: Projects
        // },
        {
            linkName: 'About',
            iconUrl: 'https://img.icons8.com/3d-fluency/94/user-male--v4.png',
            iconAlt: dictionary.aboutSection.title + ' - icon by Icons8',
            name: dictionary.aboutSection.title,
            content: About
        },
        {
            linkName: 'Contact',
            iconUrl: 'https://img.icons8.com/3d-fluency/94/chat.png',
            iconAlt: dictionary.contactSection.title + ' - icon by Icons8',
            name: dictionary.contactSection.title,
            content: Contact
        },
    ];
};
