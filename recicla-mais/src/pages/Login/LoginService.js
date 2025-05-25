import axios from 'axios';

export default async function logar({ email, senha }) {
    try {
        const response = await axios.post('http://localhost:8080/login', {
            email: email,
            senha: senha
        });

        console.log(response.data.usuario);
        return response.data.usuario;
    } catch (error) {
        console.error(error);
        return [];
    }   
}