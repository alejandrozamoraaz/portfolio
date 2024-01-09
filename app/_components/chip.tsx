import Text from '@/app/_components/text/text'

export default function Chip({
    text,
    content
}: {
    text?: string;
    content?: any;
}) {
    return (
        <div className="chip gap-small">
            {content}
            {text != null && (
                <Text type="bodySmall" text={text} />
            )}
        </div>
    );
}
