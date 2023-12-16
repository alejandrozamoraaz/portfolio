import layoutStyle from '@/app/[lang]/layout.module.css'

export const highlightNavigationButtonFromCurrentSection = () => {
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector('.footer') as HTMLElement;
    const footerHeight = footer.offsetHeight;

    const isMobilePortrait = window.innerWidth < 767;
    const navigationBar = document.querySelector('.' + layoutStyle.navigationBar) as HTMLElement;
    const bottomNavHeight = isMobilePortrait ? navigationBar.offsetHeight : 0;

    const appbar = document.querySelector('.' + layoutStyle.topBar) as HTMLElement;

    const scrollPosition = window.scrollY;

    const lastSection = sections[sections.length - 1] as HTMLElement;
    const bottomLastSection = lastSection.offsetTop - appbar.offsetHeight - bottomNavHeight - footerHeight;

    if (scrollPosition >= bottomLastSection) {
        highlightMenuLink(lastSection.id);
        return;
    }

    const currentSection = Array.from(sections).find((section) => {
        const top = (section as HTMLElement).offsetTop - appbar.offsetHeight;
        const bottom = top - bottomNavHeight - footerHeight + (section as HTMLElement).offsetHeight;

        return scrollPosition >= top && scrollPosition < bottom;
    });

    if (currentSection) {
        highlightMenuLink((currentSection as HTMLElement).id);
    }
};

const highlightMenuLink = (sectionId: string) => {
    const links = document.querySelectorAll('.' + layoutStyle.navigationButton);
    links.forEach((link) => link.classList.remove(layoutStyle.active));

    const currentLink = document.querySelector('.' + layoutStyle.navigationButton + '[id="#' + sectionId + '"]');
    if (currentLink) {
        currentLink.classList.add(layoutStyle.active);
    }
};
