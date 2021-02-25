import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body | eyes';
    description: string;
    amount: number;
}

interface User {
    name: string;
    image: string;
    level: number;
    challengeCompleted: number;
    currentExperience: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengeCompleted: number;
    activeChallenge: Challenge;
    experienceNextLevel: number;
    user: User;
    levelup: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
    selectUser: (user) => void
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {

    const [user, setUser] = useState(null);

    const [level, setLevel] = useState(1);
    const [currentExperience, setcurrentExperience] = useState(0);
    const [challengeCompleted, setchallengeCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceNextLevel = Math.pow(((level + 1) * 4), 2);

    function selectUser(user: User) {
        console.log(user);
        setUser(user);
        setLevel(user.level);
        setcurrentExperience(user.currentExperience);
        setchallengeCompleted(user.challengeCompleted);
    }

    function levelup() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completedChallenge() {

    }

    return (
        <ChallengesContext.Provider
            value={{
                level, currentExperience, challengeCompleted, activeChallenge, user, experienceNextLevel,
                levelup, startNewChallenge, resetChallenge, completedChallenge, selectUser
            }}>
            { children}
        </ChallengesContext.Provider>
    )
}