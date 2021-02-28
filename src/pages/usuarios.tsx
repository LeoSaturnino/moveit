import Head from "next/head";
import { UserContext, UserProvider } from "../contexts/UsersContext";
import styles from "../styles/pages/Usuarios.module.css";

import challengesJson from '../../challenges.json';
import usersJson from '../../users.json';
import { useContext, useState } from "react";
import { ListUsers } from "../components/ListUsers";
import { TopBar } from "../components/TopBar";
import { FormUser } from "../components/FormUser";
import { MainUsers } from "../components/MainUsers";
import { FormProvider } from "../contexts/FormContext";

interface UsuariosProps {
    users: [];
    challenges: [];
}

export default function Usuarios(props: UsuariosProps) {

    return (
        <UserProvider
            users={props.users}
            challenges={props.challenges}>
            <div className={styles.container}>
                <Head>
                    <title>Usuários | Move iT</title>
                </Head>
                <TopBar />
                <FormProvider>
                    <MainUsers />
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
    //     console.log('Erro ao buscar os Usuarios');
    //   });

    return {
        props: { users, challenges }
    }
}