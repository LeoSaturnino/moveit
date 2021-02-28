import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UsersContext';
import styles from '../styles/componentes/ExperienceBar.module.css';

export function ExperinceBar() {
    const { experienceNextLevel, resetChallenge } = useContext(ChallengesContext);
    const { user, logoutUser } = useContext(UserContext);

    const percentToNextLevel = Math.round(user.currentExperience * 100) / experienceNextLevel;

    function logout(){
        resetChallenge();
        logoutUser();
    }

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{user.currentExperience}px</span>
            </div>
            <span>{experienceNextLevel} xp</span>
            <span className={styles.spanClose} onClick={logout}>
                <img src="icons/close.svg" alt="close" />
            </span>
        </header>
    )
}