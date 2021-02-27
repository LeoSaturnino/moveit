import styles from '../styles/componentes/TopBar.module.css';
import Link from 'next/link';

export function TopBar() {
    return (
        <div className={styles.topBarContainer}>
            <div className="divLink"> <img src="/icons/console-bar.svg" alt="Início" /><Link href="/"> Início</Link></div>
            <div className="divLink"> <img src="/icons/people-bar.svg" alt="Usuários" /><Link href="/usuarios"> Usuários</Link></div>
            <div className="divLink"> <img src="/icons/espadas-bar.svg" alt="Desafios" /><Link href="/desafios"> Desafios</Link></div>
        </div>
    )
}