import axios from 'axios';

export default async function logar({email, senha}) {
    axios.post('http://localhost:8080/login', {
        email: email,
        senha: senha
    })
        .then(response => {
            console.log(response.data);
            return response;
        })
        .catch(error => {
            console.error(error);
        });
}