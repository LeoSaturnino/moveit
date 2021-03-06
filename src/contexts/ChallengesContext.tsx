import { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import { LevelupModal } from '../components/LevelupModal';
import { UserContext } from './UsersContext';

interface Challenge {
    type: 'body | eyes';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    activeChallenge: Challenge;
    user: any;
    experienceNextLevel: number;
    levelup: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
    closeLevelupModal: () => void;
}

interface ChallengeProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const { user, challenges } = useContext(UserContext);

    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

    const experienceNextLevel = (user) ? Math.pow(((user.level + 1) * 4), 2) : Math.pow(((1 + 1) * 4), 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    function levelup() {
        user.level = user.level + 1;
        setIsLevelModalOpen(true);
    }

    function closeLevelupModal() {
        setIsLevelModalOpen(false);
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
                activeChallenge, experienceNextLevel, user,
                levelup, startNewChallenge, resetChallenge, completedChallenge, closeLevelupModal
            }}>
            { children}
            { isLevelModalOpen ? (
                <LevelupModal />
            ) : (
                    <></>
                )}
        </ChallengesContext.Provider>
    )
}