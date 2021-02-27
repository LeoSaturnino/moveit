import styles from '../styles/componentes/ItemChallenge.module.css';

export function ItemChallenge(props) {
    const { challenge } = props;

    return (
        <li key={challenge.id} className={styles.challengeContainer}>
            <>
                    <img src={`icons/${challenge.type}.svg`} />
                    <div>
                        <strong>{challenge.description}</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="XP" />
                         {challenge.amount} XP
                        </p>
                    </div>
                </>
        </li>
    )
}