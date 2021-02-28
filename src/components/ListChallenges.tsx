
import { useContext } from 'react';
import { UserContext } from '../contexts/UsersContext';
import styles from '../styles/componentes/ListChallenges.module.css';
import { ItemChallenge } from './ItemChallenge';

export function ListChallenges() {
    const { challenges } = useContext(UserContext);
    return (
        <div className={styles.listChallengesContainer}>
            <h1>Desafios</h1>
            <ul>
                {challenges.map((c, i) => (
                    <ItemChallenge key={i} challenge={c} />
                ))}
            </ul>
        </div>
    )
}