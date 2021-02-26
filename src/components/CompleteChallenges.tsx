import { useContext } from "react";
import { UserContext } from "../contexts/UsersContext";
import styles from "../styles/componentes/CompleteChallenges.module.css";

export function CompleteChallenges() {
    const { user } = useContext(UserContext);

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios Completados</span>
            <span>{user.challengeCompleted}</span>
        </div>
    )
}