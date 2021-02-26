import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/componentes/Profile.module.css";

export function Profile(props) {
    let { user } = useContext(ChallengesContext);
    if (props.user) {
        user = props.user;
    }

    return (
        <div className={styles.profileContainer}>
            { user ? (
                <>
                    <img src={`https://github.com/${user.image}.png`} />
                    <div>
                        <strong>{user.name}</strong>
                        <p>
                            <img src="icons/level.svg" alt="Level" />
                        Level {user.level}
                        </p>
                    </div>
                </>
            ) : <> </>}
        </div>
    )
}