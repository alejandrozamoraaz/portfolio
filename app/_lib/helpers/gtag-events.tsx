import { event } from '@/app/_lib/helpers/gtag';

export const gtagIconButtonHref = (title: string) => event({ action: 'href', category: 'icon_button', label: title, value: null });
export const gtagIconButtonClick = (title: string) => event({ action: 'click', category: 'icon_button', label: title, value: null });

export const gtagTextButtonHref = (title: string) => event({ action: 'href', category: 'text_button', label: title, value: null });
