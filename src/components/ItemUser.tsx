import styles from '../styles/componentes/ItemUser.module.css';

export function ItemUser(props) {
    const { user } = props;

    return (
        <li key={user.id} className={styles.itemUserContainer}>
            <img src={`${user.image}`} />
            <div>
                <strong>{user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                        Level {user.level}
                </p>
            </div>
        </li>
    )
}