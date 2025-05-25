import axios from 'axios';

export default async function cadastrar({ nome, email, senha }) {
    axios.post('http://localhost:8080/usuarios', {
        nome: nome,
        email: email,
        senha: senha
    })
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            console.error(error);
        });
}