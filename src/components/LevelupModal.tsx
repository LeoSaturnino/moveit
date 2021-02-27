import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { UserContext } from '../contexts/UsersContext';
import styles from '../styles/componentes/LevelupModal.module.css';

export function LevelupModal() {
    const { closeLevelupModal } = useContext(ChallengesContext);
    const { user } = useContext(UserContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{user.level}</header>

                <strong>Parabéns!</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelupModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </button>
            </div>
        </div>
    )
}