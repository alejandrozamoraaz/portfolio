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
        //     iconUrl: 'https://res.cloudinary.com/dlyfwab7x/image/upload/v1704144609/icons/gnytybm13qdybiry6ztt.png',
        //     iconAlt: 'Noticias - icon by Icons8',
        //     name: dictionary.projectsSection.title,
        //     content: Projects
        // },
        {
            linkName: 'About',
            iconUrl: 'https://res.cloudinary.com/dlyfwab7x/image/upload/v1704144832/icons/ztd1acdbprqepq8jr4n1.png',
            iconAlt: 'Usuario masculino - icon by Icons8',
            name: dictionary.aboutSection.title,
            content: About
        },
        {
            linkName: 'Contact',
            iconUrl: 'https://res.cloudinary.com/dlyfwab7x/image/upload/v1704145021/icons/nokcptgecqzsvnfbxkhx.png',
            iconAlt: 'Charla - icon by Icons8',
            name: dictionary.contactSection.title,
            content: Contact
        },
    ];
};
