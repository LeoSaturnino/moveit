import styles from "../styles/pages/Home.module.css";
import Head from 'next/head';
import { ChallengeProvider } from "../contexts/ChallengesContext";
import {  UserProvider } from "../contexts/UsersContext";
import { Main } from "../components/Main";

import challengesJson from '../../challenges.json';
import usersJson from '../../users.json';

interface HomeProps {
  users: [];
  challenges: [];
}

export default function Home(props) {
  return (
    <UserProvider
      users={props.users}
      challenges={props.challenges}>
      <ChallengeProvider>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <Main />
        </div>
      </ChallengeProvider>
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