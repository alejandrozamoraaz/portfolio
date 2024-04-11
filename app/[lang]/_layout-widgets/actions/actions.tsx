'use client'

import actionsStructure from './actions.structure.module.css';
import actionsEffects from './actions.effects.module.css';

import IconButton from '@/app/_components/buttons/icon-button/icon-button';
import Icon from '@/app/_components/icon/icon';

import { ArrowUp } from '@/app/_lib/icons';
import { gtagIconButtonClick } from '@/app/_lib/helpers/gtag-events';

export default function Actions() {
    return (
        <div className={`${actionsStructure.container} ${actionsEffects.show}`}>
            <IconButton
                title="Go to Top"
                isFloat={true}
                type="secondary"
                onClick={(router) => {
                    gtagIconButtonClick("navigate_to_top");
                    router.push('#header');
                }}
            >
                <Icon iconData={ArrowUp} size="extra-large" />
            </IconButton>
        </div>
    )
}
