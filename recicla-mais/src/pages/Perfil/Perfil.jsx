import "./Perfil.css";
import RankingPontos from "../../components/RankingPontos/RankingPontos";
import Header from "../../components/Header/Header";
import { useState, useEffect } from 'react';
import { listarPosts } from '../Home/HomeService'

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [publicacoes, setPublicacoes] = useState([]);

  const ranking = [
    { nome: "Gustavo Nakamura", pontos: 250 },
    { nome: "João Victor", pontos: 100 },
    { nome: "Vitor Hugo Vieira", pontos: 200 },
  ];

  useEffect(() => {
    async function listarPublicacoes(idUsuario) {
      const response = await listarPosts()

      return response.filter(publi => publi.usuario.id === idUsuario);
    }

    setUsuario(JSON.parse(localStorage.getItem('usuario')));
    setPublicacoes(listarPublicacoes);
  }, []);

  return (
    <div className="container-pefil">
      <Header fluxo="Perfil" />

      <div className="perfil-container">
        <h1>{usuario.nome}</h1>
        <p>{usuario.email}</p>

        <div className="perfil-metricas">
          <p>Quantidade de publicação:</p>
          <div className="perfil-box">{publicacoes.length}</div>

          <p>Quantidade de pontos:</p>
          <div className="perfil-box">{usuario.pontos}</div>
        </div>

        <RankingPontos usuario={usuario} ranking={ranking} />
      </div>
    </div>
  );
}
