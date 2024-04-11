import cardColors from "./card.colors.module.css";

export default function Card({
    type,
    borderSize = "normal",
    classCard,
    children,
}: {
    type?: 'fillBase';
    borderSize?: 'normal' | 'large';
    classCard?: string;
    children: any | any[];
}) {
    return (
        <div className={`${classCard} ${type === "fillBase" && cardColors.fillBase} ${borderSize === "large" ? "border-radius-large" : "border-radius"}`}>
            {children}
        </div>
    );
}