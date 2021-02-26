import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/componentes/ExperienceBar.module.css';

export function ExperinceBar() {
    const { user, experienceNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(user.currentExperience * 100) / experienceNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{user.currentExperience}px</span>
            </div>
            <span>{experienceNextLevel} xp</span>
        </header>
    )
}