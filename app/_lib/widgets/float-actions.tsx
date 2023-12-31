import IconButton from '@/app/_components/icon-button'

export default function FloatActions() {
    return (
        <div className="float-actions">
            <IconButton
                href="#Header"
                isFloat={true}
                iconType="img"
                imageIconProps={{
                    src: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704144245/icons/divholbgjsmgpp5oscyp.png",
                    alt: "Top - icon by Icons8"
                }}
            />
        </div>
    )
}
