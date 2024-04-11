import progressStructure from './progress.structure.module.css';
import progressColors from './progress.colors.module.css';
import progressEffects from './progress.effects.module.css';

export default function Progress() {
    return (
        <div className={`${progressStructure.container} ${progressColors.backgroundPrimary}`}>
            <div className={`${progressStructure.barFill} ${progressEffects.barFill} ${progressColors.foregroundPrimary}`}></div>
            <div className={`${progressStructure.endIndicator} ${progressColors.foregroundPrimary}`}></div>
        </div>
    );
}