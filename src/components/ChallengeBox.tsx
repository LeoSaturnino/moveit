import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/componentes/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer} >
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button"
                            className={styles.challengeFailButton}
                            onClick={resetChallenge}>
                            Falhei
                            </button>
                        <button type="button"
                            className={styles.challengeSuccessButton}
                            onClick={completedChallenge}>
                            Completei
                            </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Aguardando Finalização da Tarefa</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de Level completando Desafios!
                    </p>
                    </div>
                )}
        </div>
    )
}