import styles from '../styles/componentes/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;
    return (
        <div className={styles.challengeBoxContainer} >
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e tome uma Xicara de café.</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailButton}>Falhei</button>
                        <button type="button" className={styles.challengeSuccessButton}>Completei</button>
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