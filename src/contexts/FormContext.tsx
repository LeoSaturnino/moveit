import { createContext, ReactNode, useState } from 'react';

interface FormContextData {
    cadastroUser: boolean;
    cadastroChallenge: boolean;
    setCadastroUser: (value: boolean) => void;
    setCadastroChallenge: (value: boolean) => void;
}

interface FormContextProps {
    children: ReactNode;
}


export const FormContext = createContext({} as FormContextData)

export function FormProvider({ children }: FormContextProps) {
    const [cadastroUser, setCadastroUser] = useState(false);
    const [cadastroChallenge, setCadastroChallenge] = useState(false);

    return (
        <FormContext.Provider
            value={{
                cadastroUser,
                cadastroChallenge,
                setCadastroUser,
                setCadastroChallenge
            }}>
            {children}
        </FormContext.Provider>
    )

}