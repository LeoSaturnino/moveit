import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/componentes/Profile.module.css";

export function Profile() {
    const { level, user } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            { user ? (
                <>
                    <img src={`https://github.com/${user.image}.png`} />
                    <div>
                        <strong>{user.name}</strong>
                        <p>
                            <img src="icons/level.svg" alt="Level" />
                        Level {level}
                        </p>
                    </div>
                </>
            ) : <> </>}
        </div>
    )
}