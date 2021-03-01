import styles from '../styles/componentes/Form.module.css';
import { useState } from "react";
const axios = require('axios');

interface Challenge {
    type: string;
    description: string;
    amount: number;
}

export function FormChallenge() {
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        let challenge: Challenge;
        challenge.type = type;
        challenge.description = description;
        challenge.amount = amount;

        // envia os dados via post 
        axios.post('http://localhost:3333/challenge', challenge)
            .then((resp) => {
                console.log('Cadastrou');
            }).catch((resp) => {
                console.log('Erro ao cadastrar');
            });

    }

    return (
        <div className={styles.formContainer}>
            <h1>Cadastro Desafio</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <label>
                        Tipo
                    </label>
                    <select value={type} onChange={(e) => { setType(e.target.value) }} >
                        <option value="body">Corpo</option>
                        <option value="eye">Olhos</option>
                        <option value="celular">Celular</option>
                        <option value="coffee">Café</option>
                        <option value="people">Pessoas</option>
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <label>
                        Descrição
                    </label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div className={styles.inputContainer}>
                    <label>
                        Valor XP
                    </label>
                        <input type="number" value={amount} onChange={(e) => { setAmount(parseInt(e.target.value)) }} />
                </div>

                <input className={styles.formButton} type="submit" value="Salvar" />
            </form>
        </div>
    )
}