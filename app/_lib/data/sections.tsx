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
        //     iconUrl: 'icons/gnytybm13qdybiry6ztt',
        //     iconAlt: 'Noticias - icon by Icons8',
        //     name: dictionary.projectsSection.title,
        //     content: Projects
        // },
        {
            linkName: 'About',
            iconUrl: 'icons/ztd1acdbprqepq8jr4n1',
            iconAlt: 'Usuario masculino - icon by Icons8',
            name: dictionary.aboutSection.title,
            content: About
        },
        {
            linkName: 'Contact',
            iconUrl: 'icons/nokcptgecqzsvnfbxkhx',
            iconAlt: 'Charla - icon by Icons8',
            name: dictionary.contactSection.title,
            content: Contact
        },
    ];
};
