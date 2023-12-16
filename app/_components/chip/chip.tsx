import style from './chip.module.css'

export default function Chip({
    text,
}: {
    text: string;
}) {
    return (
        <div className={style.chip + " vertical-center"}>
            <p className={style.chipText}>{text}</p>
        </div>      
    );
}
