import styles from '../styles/componentes/Form.module.css';
import { useState } from "react";
const axios = require('axios');

interface User {
    name: string;
    username: string;
    image: string;
    level: number;
    challengeCompleted: number;
    currentExperience: number;
}

export function FormUser() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let user: User;
        user.name = name;
        user.image = image;
        user.username = username;
        user.level = 1;
        user.challengeCompleted = 0;
        user.currentExperience = 0;

        // envia os dados via post 
        axios.post('http://localhost:3333/user', user)
            .then((resp) => {
                console.log('Cadastrou');
            }).catch((resp) => {
                console.log('Erro ao cadastrar');
            });


    }

    return (
        <div className={styles.formContainer}>
            <h1>Cadastro Usuário</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </label>
                <label>
                    Username:
                <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <label>
                    Image:
                <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}