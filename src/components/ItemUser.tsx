import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Profile } from './Profile';
import styles from '../styles/componentes/ItemUser.module.css';

export function ItemUser(props) {
    const { user } = props;
    const { selectUser } = useContext(ChallengesContext);

    return (
        <li key={user.id} className={styles.itemUserContainer} onClick={() => (selectUser(user))}>
            <Profile user={user} />
        </li>
    )
}