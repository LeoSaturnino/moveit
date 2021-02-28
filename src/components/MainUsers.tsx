import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import { FormUser } from './FormUser';
import { ListUsers } from './ListUsers';

export function MainUsers() {
    const { cadastroUser, setCadastroUser } = useContext(FormContext);

    return (
        <>
            {cadastroUser ? (
                <>
                    <FormUser />

                    <button type="button" onClick={() => { setCadastroUser(false) }}>
                        <img src="/icons/cancel1.svg" alt="Fechar" />
                    </button>
                </>
            ) : (
                    <>
                        <ListUsers />

                        <button type="button" onClick={() => { setCadastroUser(true) }}>
                            <img src="/icons/plus1.svg" alt="Adicionar" />
                        </button>
                    </>
                )}
        </>
    )
}