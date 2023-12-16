'use client'

import { usePathname } from 'next/navigation'
import { i18n } from '@/i18n-config'

export default function LocaleSwitcher({
    activeLocale,
}: {
    activeLocale: string;
}) {
    const pathName = usePathname();

    const buildNewPath = (locale: string) => {
        if (!pathName) return '/portfolio/es';
        const segments = pathName.split('/');
        segments[1] = locale;
        return segments.join('/portfolio/');
    };

    const handleChangeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = event.target.value;
        const newPath = buildNewPath(selectedLocale);
        window.location.href = newPath;
    };

    return (
        <select className="button text-button" value={activeLocale} onChange={handleChangeLocale}>
            {i18n.locales.map((locale) => (
                <option key={locale} value={locale}>
                    {locale}
                </option>
            ))}
        </select>
    );
}
