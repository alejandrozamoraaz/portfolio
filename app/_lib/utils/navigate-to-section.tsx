import layoutStyle from '@/app/[lang]/layout.module.css'

export const navigateToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
        const appbar = document.querySelector('.' + layoutStyle.topBar) as HTMLElement;
        window.scrollTo({
            top: element.offsetTop - appbar.offsetHeight,
            behavior: 'smooth',
        });
    }
};
