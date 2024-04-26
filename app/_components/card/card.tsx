import cardColors from "./card.colors.module.css";
import cardStructure from "./card.structure.module.css";

export default function Card({
    borderSize = "normal",
    classCard,
    children,
}: {
    borderSize?: 'normal' | 'large';
    classCard?: string;
    children: any | any[];
}) {
    return (
        <div className={`${classCard} ${cardStructure.cardContainer} ${cardColors.cardContainer} ${borderSize === "large" ? cardStructure.borderRadiusLarge : cardStructure.borderRadiusNormal}`}>
            {children}

            <div className={`${cardStructure.shine} ${cardColors.shine}`}></div>
        </div>
    );
}