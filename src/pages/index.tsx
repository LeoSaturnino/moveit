import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperinceBar } from "../components/ExperinceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css";
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { ListUsers } from "../components/ListUsers";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  const { user } = useContext(ChallengesContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      { user == null ? (
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
  )
}
