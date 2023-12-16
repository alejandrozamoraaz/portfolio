import style from './text.module.css'

export default function Text({
    text,
    type,
    weight,
    classText,
}: {
    text: string;
    type?: "headline" | "title" | "bodyLarge" | "bodySmall" | undefined;
    weight?: 300 | 600 | 900 | undefined;
    classText?: string;
}) {
    const textType = (() => {
        switch (type) {
            case "headline":
                return style.headline;
            case "title":
                return style.title;
            case "bodyLarge":
                return style.bodyLarge;
            case "bodySmall":
                return style.bodySmall;
            default:
                return style.body;
        }
    })();

    const textStyle = {
        fontWeight: weight || '400',
    };

    return (
        <p style={textStyle} className={textType + " " + classText}>{text}</p>
    );
}
