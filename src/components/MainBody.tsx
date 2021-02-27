import { useContext } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import { UserContext } from '../contexts/UsersContext';
import { ChallengeBox } from './ChallengeBox';
import { CompleteChallenges } from './CompleteChallenges';
import { Countdown } from './Countdown';
import { ExperinceBar } from './ExperinceBar';
import { Profile } from './Profile';
import { StartUser } from './StartUser';
import { TopBar } from './TopBar';

export function MainBody() {
    const { user } = useContext(UserContext);
    return (
        <>
            {user == null ? (
                <>
                    <TopBar />
                    <StartUser />
                </>
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
        </ >
    )
}