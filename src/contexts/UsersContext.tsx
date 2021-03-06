import { createContext, ReactNode, useState } from 'react';
import axios from 'axios';

interface UserContextData {
    users: User[];
    challenges: Challenge[];
    user: User;
    selectUser: (user) => void;
    logoutUser: () => void;
    saveUser: (user) => void;
}

interface UserProviderProps {
    children: ReactNode;
    users: User[];
    challenges: Challenge[];
}

interface Challenge {
    type: string;
    description: string;
    amount: number;
}

interface User {
    name: string;
    username:string;
    image: string;
    level: number;
    challengeCompleted: number;
    currentExperience: number;
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children, ...rest }: UserProviderProps) {
    const { users, challenges } = rest;
    const [user, setUser] = useState(null);

    function selectUser(user: User) {
        setUser(user);
    }

    function logoutUser() {
        console.log('dsfsdfsdfsdf')
        setUser(null);
    }

    function saveUser() {
        if (!user) {
            return;
        }
        axios.put('http://localhost:3333/user', user)
            .then((resp) => {
                console.log('Usuário Salvo');
            })
            .catch((erro) => {
                console.log('Erro ao Salvar o Usuário');
            })
    }

    return (
        <UserContext.Provider
            value={{
                users,
                challenges,
                user,
                selectUser,
                logoutUser,
                saveUser
            }}>
            {children}
        </UserContext.Provider>
    )
}