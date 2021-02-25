import styles from '../styles/componentes/ListUsers.module.css';
import users from '../../users.json';
import { ItemUser } from './ItemUser';

export function ListUsers() {
    return (
        <div className={styles.listUsersContainer}>
            <ul>
                {users.map((u) => (
                    <ItemUser user={u} />
                ))}
            </ul>
        </div>
    )
}