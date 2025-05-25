import axios from 'axios';

export async function listarPosts() {
    try {
        const response = await axios.get('http://localhost:8080/publicacoes');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function listarComentarios(id) {
    try {
        const response = await axios.get(`http://localhost:8080/respostas/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}