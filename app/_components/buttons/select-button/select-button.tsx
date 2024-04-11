'use client'

import selectButtonStructure from "./select-button.structure.module.css";
import selectButtonColors from "./select-button.colors.module.css";
import selectButtonEffects from "./select-button.effects.module.css";

import Text from "@/app/_components/text/text";
import Icon from "@/app/_components/icon/icon";

import { SelectItem } from "@/app/_lib/definitions";
import { ArrowUp } from "@/app/_lib/icons";
import { useState } from "react";

export default function SelectButton({ currentOption, options, onChange }: {
    currentOption: SelectItem;
    options: SelectItem[];
    onChange: (option: SelectItem) => void;
}) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={`${selectButtonStructure.container} ${selectButtonEffects.container}`}>
            <button type="button" onClick={() => setOpen(!isOpen)} className={`button ${selectButtonStructure.currentItem} ${selectButtonColors.currentItem} ${selectButtonColors.surface}`}>
                <Text type="body" text={currentOption.display} />
                <Icon iconData={ArrowUp} iconClass={`${selectButtonStructure.arrowIcon} ${selectButtonEffects.arrowIcon} ${isOpen && selectButtonEffects.open}`} />
            </button>

            <div className={`col ${selectButtonStructure.items} ${isOpen && selectButtonEffects.open} ${isOpen && selectButtonStructure.open} ${selectButtonColors.surface} ${selectButtonEffects.items}`}>
                {options.map((option) => (
                    <button
                        type="button"
                        className={`button ${selectButtonColors.surface} ${selectButtonStructure.item} ${selectButtonColors.item}`}
                        key={option.value}
                        onClick={() => onChange(option)}
                    >
                        <Text type="body" text={option.display} />
                    </button>
                ))}
            </div>
        </div >
    );
}
