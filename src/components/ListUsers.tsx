import { useContext } from 'react';
import { UserContext } from '../contexts/UsersContext';
import styles from '../styles/componentes/ListUsers.module.css';
import { ItemUser } from './ItemUser';

export function ListUsers() {
    const { users } = useContext(UserContext);
    return (
        <div className={styles.listUsersContainer}>
            <h1>Usuários</h1>
            <ul>
                {users.map((u, i) => (
                    <ItemUser key={i} user={u} />
                ))}
            </ul>

            <button type="button">
                <img src="/icons/plus.svg" alt="Adicionar" />
            </button>
        </div>
    )
}