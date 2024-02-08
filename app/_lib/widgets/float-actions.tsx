import IconButton from '@/app/_components/icon-button'

export default function FloatActions() {
    return (
        <div className="float-actions">
            <IconButton
                href="#Header"
                title="Go to Top"
                isFloat={true}
                imageIconProps={{
                    src: "https://res.cloudinary.com/dlyfwab7x/image/upload/v1704144245/icons/divholbgjsmgpp5oscyp.png",
                    alt: "Top - icon by Icons8"
                }}
            />
        </div>
    )
}
