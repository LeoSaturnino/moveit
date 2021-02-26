import styles from '../styles/componentes/TopBar.module.css';
import Link from 'next/link';

export function TopBar() {
    return (
        <div className={styles.topBarContainer}>
            <div className="divLink"><Link href="/">Início</Link></div>
            <div className="divLink"><Link href="/usuarios">Usuários</Link></div>
            <div className="divLink"><Link href="/desafios">Desafios</Link></div>
        </div>
    )
}