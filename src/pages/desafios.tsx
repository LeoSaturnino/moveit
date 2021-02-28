import Head from "next/head";
import styles from "../styles/pages/Desafios.module.css";
import { UserProvider } from "../contexts/UsersContext";
import { TopBar } from "../components/TopBar";
import { MainChallenges } from "../components/MainChallenges";

import challengesJson from '../../challenges.json';
import usersJson from '../../users.json';
import { FormProvider } from "../contexts/FormContext";


interface DesafiosProps {
    users: [];
    challenges: [];
}

export default function Desafios(props: DesafiosProps) {

    return (
        <UserProvider
            users={props.users}
            challenges={props.challenges}>
            <div className={styles.container}>
                <Head>
                    <title>Desafios | Move iT</title>
                </Head>
                <TopBar />
                <FormProvider>
                    <MainChallenges />
                </FormProvider>
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