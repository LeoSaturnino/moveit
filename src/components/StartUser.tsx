import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UsersContext';
import styles from '../styles/componentes/StartUser.module.css';

let timeoutErro: NodeJS.Timeout;

export function StartUser() {
    const { users, selectUser } = useContext(UserContext);
    const [name, setName] = useState('');
    const [erroLogin, setErroLogin] = useState(false);

    function start() {
        let user = users.find((u) => {
            if (u.username == name) {
                return true;
            }
        });
        if (user != null || user != undefined) {
            clearTimeout(timeoutErro);
            selectUser(user);
        } else {
            setErroLogin(true);
            timeoutErro = setTimeout(() => {
                setErroLogin(false);
            }, 5000);
        }
    }

    return (
        <div className={styles.startContainer}>
            <div className={styles.infoContainer}>
                <h1>Move iT</h1>

                <p>Aplicação que junta a técnica de Pomodoro + atividades laborais
                utilizando a técnicas de gamification visando aumentar a produtividade, o foco,
                aliviar o stress e evitar o desenvolvimento de problemas
                de Ergonomia no Trabalho.</p>
                <div className={styles.iconsContainer}>
                    <img src="/icons/body.svg" alt="Iniciar" />
                    <img src="/icons/eye.svg" alt="Iniciar" />
                    <img src="/icons/people.svg" alt="Iniciar" />
                    <img src="/icons/coffee.svg" alt="Iniciar" />
                    <img src="/icons/celular.svg" alt="Iniciar" />

                </div>
            </div>
            <div className={styles.loginContainer}>
                <p>Iniciar Aplicação</p>
                <div className={styles.inputContainer}>

                    <input placeholder="Username" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <button type="button" onClick={start}>
                        <img src="/icons/seta-direita-fina.svg" alt="Iniciar" />
                    </button>

                </div>
                {erroLogin ? (
                    <span>Usuário não encontrado</span>
                ) : (
                        <span></span>
                    )}
            </div>
            <div className={styles.infoDevContainer}>
                <p>Criado por <a target="blank" href="https://github.com/leosaturnino">Leo Saturnino</a></p>
            </div>
        </div>
    )
}
