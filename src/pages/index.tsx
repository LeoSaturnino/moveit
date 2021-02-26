import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperinceBar } from "../components/ExperinceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { useContext } from "react";
import { ChallengeProvider, ChallengesContext } from "../contexts/ChallengesContext";
import { ListUsers } from "../components/ListUsers";
import { CountdownProvider } from "../contexts/CountdownContext";
import { UserContext, UserProvider } from "../contexts/UsersContext";
const axios = require('axios');

interface HomeProps {
  users: [];
  challenges: [];
}

export default function Home(props) {
  const { user } = useContext(UserContext);
  return (
    <UserProvider
      users={props.users}
      challenges={props.challenges}>
      <ChallengeProvider>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          {user == null ? (
            <ListUsers />
          ) : (
              <>
                <ExperinceBar />
                <CountdownProvider>
                  <section>
                    <div>
                      <Profile />
                      <CompleteChallenges />
                      <Countdown />
                    </div>
                    <div>
                      <ChallengeBox />
                    </div>
                  </section>
                </CountdownProvider>
              </>
            )
          }
        </div >
      </ChallengeProvider>
    </UserProvider>
  )
}

export const getServerSideProps = async () => {
  let users = [];
  let challenges = [];

  axios.get('localhost:3333/users')
    .then((resp) => {
      users = resp;
    }).catch((erro) => {
      console.log('Erro ao buscar os Usuários');
    });


  axios.get('localhost:3333/users')
    .then((resp) => {
      challenges = resp;
    }).catch((erro) => {
      console.log('Erro ao buscar os Desafios');
    });

  return {
    props: [users, challenges]
  }
}