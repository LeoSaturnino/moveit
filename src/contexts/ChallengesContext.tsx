import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import challenges from '../../challenges.json';
import { UserContext } from './UsersContext';

interface Challenge {
    type: 'body | eyes';
    description: string;
    amount: number;
}
interface ChallengesContextData {
    activeChallenge: Challenge;
    experienceNextLevel: number;
    levelup: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const { user } = useContext(UserContext);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceNextLevel = Math.pow(((user.level ?? 1 + 1) * 4), 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    function levelup() {
        user.level = user.level + 1;
    }


    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            new Notification('Novo Desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`,
                icon: '/favicon.png'
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;
        let finalExperience = user.currentExperience + amount;

        if (finalExperience >= experienceNextLevel) {
            finalExperience = finalExperience - experienceNextLevel;
            levelup();
        }

        user.currentExperience = finalExperience;
        user.challengeCompleted += 1;
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider
            value={{
                activeChallenge, experienceNextLevel,
                levelup, startNewChallenge, resetChallenge, completedChallenge
            }}>
            { children}
        </ChallengesContext.Provider>
    )
}