import axios from 'axios';
import { createContext, ReactNode, useState } from 'react';

interface UserContextData {
    users: [];
    challenges: [];
    user: User;
    selectUser: (user) => void;
    logoutUser: () => void;
    saveUser: (user) => void;
}

interface UserProviderProps {
    children: ReactNode;
    users: [];
    challenges: [];
}

interface User {
    name: string;
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
        console.log(user);
        setUser(user);
    }

    function logoutUser() {
        setUser(null);
    }

    function saveUser() {
        if (!user) {
            return;
        }
        axios.post('localhost:3333/user', user)
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