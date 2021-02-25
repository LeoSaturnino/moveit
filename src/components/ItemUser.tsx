import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles2 from '../styles/componentes/ItemUser.module.css';
import styles from '../styles/componentes/Profile.module.css';

export function ItemUser(props) {
    const { user } = props;
    const { selectUser } = useContext(ChallengesContext);
    
    return (
        <li key={user.id} className={styles2.itemUserContainer} onClick={() => ( selectUser(user) )}>
            <div className={styles.profileContainer}>
                <img src={`https://github.com/${user.image}.png`} />
                <div>
                    <strong>{user.name}</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level" />
                        Level {user.level}
                    </p>
                </div>
            </div>
        </li>
    )
}