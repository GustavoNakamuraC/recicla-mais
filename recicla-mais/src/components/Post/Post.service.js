import axios from 'axios';

export default async function curtirPublicacao(id) {
    try {
        const response = await axios.put(`http://localhost:8080/publicacoes/curtir/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }   
}