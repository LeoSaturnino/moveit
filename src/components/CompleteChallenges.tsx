import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/componentes/CompleteChallenges.module.css";

export function CompleteChallenges() {
    const { user } = useContext(ChallengesContext);

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios Completados</span>
            <span>{user.challengeCompleted}</span>
        </div>
    )
}