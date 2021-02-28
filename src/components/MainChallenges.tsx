import { useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import { FormChallenge } from './FormChallenge';
import { ListChallenges } from './ListChallenges';

export function MainChallenges() {
    const { cadastroChallenge, setCadastroChallenge } = useContext(FormContext);

    return (
        <>
            {cadastroChallenge ? (
                <>
                    <FormChallenge />
                    <button type="button" onClick={() => { setCadastroChallenge(false) }}>
                        <img src="/icons/cancel1.svg" alt="Fechar" />
                    </button>
                </>
            ) : (
                    <>
                        <ListChallenges />
                        <button type="button" onClick={() => { setCadastroChallenge(true) }}>
                            <img src="/icons/plus1.svg" alt="Adicionar" />
                        </button>
                    </>
                )}
        </>
    )
}