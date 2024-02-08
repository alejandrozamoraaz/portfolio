import Script from 'next/script'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Init() {
    return (
        process.env.NODE_ENV === 'production' ?
            <>
                <Script
                    async
                    strategy="beforeInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />

                <Script dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}');
            `,
                }} />
            </>
            : <></>
    );
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    process.env.NODE_ENV === 'production' &&
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    process.env.NODE_ENV === 'production' &&
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
};