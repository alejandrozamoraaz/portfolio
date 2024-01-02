import Text from '@/app/_components/text/text'

export default function Chip({
    text,
    content
}: {
    text?: string;
    content?: any;
}) {
    return (
        <div className="chip">
            {content}
            {text != null && (
                <Text type="bodySmall" weight={300} text={text} />
            )}
        </div>
    );
}
