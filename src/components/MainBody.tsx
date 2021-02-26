import { useContext } from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';
import { UserContext } from '../contexts/UsersContext';
import { ChallengeBox } from './ChallengeBox';
import { CompleteChallenges } from './CompleteChallenges';
import { Countdown } from './Countdown';
import { ExperinceBar } from './ExperinceBar';
import { ListUsers } from './ListUsers';
import { Profile } from './Profile';
import { TopBar } from './TopBar';

export function MainBody() {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <>
            {user == null ? (
                <>
                    <TopBar />
                    <ListUsers />
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