'use client'

import dynamic from 'next/dynamic';

import actionsStructure from './actions.structure.module.css';
import actionsEffects from './actions.effects.module.css';

import IconButton from '@/app/_components/buttons/icon-button/icon-button';

import { gtagIconButtonClick } from '@/app/_lib/helpers/gtag-events';

const ArrowUpIcon = dynamic(() => import('@/app/_lib/icons/arrow-up'));

export default function Actions() {
    return (
        <div className={`${actionsStructure.container} ${actionsEffects.show}`}>
            <IconButton
                title="Go to Top"
                isFloat={true}
                type="primary"
                onClick={(router) => {
                    gtagIconButtonClick("navigate_to_top");
                    router.push('#header');
                }}
            >
                <ArrowUpIcon className="icon-large" />
            </IconButton>
        </div>
    )
}
