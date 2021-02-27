import Head from "next/head";
import { UserProvider } from "../contexts/UsersContext";
import styles from "../styles/pages/Desafios.module.css";

import challengesJson from '../../challenges.json';
import usersJson from '../../users.json';
import { useState } from "react";
import { TopBar } from "../components/TopBar";
import { ListChallenges } from "../components/ListChallenges";

interface DesafiosProps {
    users: [];
    challenges: [];
}

export default function Desafios(props: DesafiosProps) {
    const [cadastro, setCadastro] = useState(false);

    return (
        <UserProvider
            users={props.users}
            challenges={props.challenges}>
            <div className={styles.container}>
                <Head>
                    <title>Desafios | move.it</title>
                </Head>
                <TopBar />
                {cadastro ? (
                    <div>
                        FORMULARIO
                    </div>
                ) : (
                      <ListChallenges/>
                    )}
            </div>
        </UserProvider>
    )
}

export const getServerSideProps = async () => {
    let users = [];
    let challenges = [];
    users = usersJson;
    challenges = challengesJson;

    // console.log(challenges);
    // axios.get('localhost:3333/users')
    //   .then((resp) => {
    //     users = resp;
    //   }).catch((erro) => {
    //     console.log('Erro ao buscar os Usuários');
    //   });


    // axios.get('localhost:3333/users')
    //   .then((resp) => {
    //     challenges = resp;
    //   }).catch((erro) => {
    //     console.log('Erro ao buscar os Desafios');
    //   });

    return {
        props: { users, challenges }
    }
}