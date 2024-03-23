import IconButton from '@/app/_components/icon-button'
import { ArrowUp } from '@/app/_lib/icons'

export default function ActionsWrapper() {
    return (
        <div className="actions-wrapper">
            <IconButton
                href="#Header"
                title="Go to Top"
                isFloat={true}
            >
                <ArrowUp className="icon-large" />
            </IconButton>
        </div>
    )
}
