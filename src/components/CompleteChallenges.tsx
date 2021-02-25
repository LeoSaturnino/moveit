import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/componentes/CompleteChallenges.module.css";

export function CompleteChallenges() {
    const { challengeCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios Completados</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}