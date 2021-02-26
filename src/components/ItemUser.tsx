import { Profile } from './Profile';
import { useContext } from 'react';
import { UserContext } from '../contexts/UsersContext';
import styles from '../styles/componentes/ItemUser.module.css';

export function ItemUser(props) {
    const { user } = props;
    const { selectUser } = useContext(UserContext);

    return (
        <li key={user.id} className={styles.itemUserContainer} onClick={() => (selectUser(user))}>
            <Profile user={user} />
        </li>
    )
}