import "./Perfil.css";
import RankingPontos from "../../components/RankingPontos/RankingPontos";
import Header from "../../components/Header/Header";

export default function Perfil() {
  const usuario = {
    nome: "Vitor Hugo Vieira",
    email: "emailteste@gmail.com",
    publicacoes: 15,
    pontos: 50,
    posicao: 3,
  };

  const ranking = [
    { nome: "Gustavo Nakamura", pontos: 250 },
    { nome: "João Victor", pontos: 100 },
    { nome: "Vitor Hugo Vieira", pontos: 200 },
  ];

  return (
    <div className="container-pefil">
      <Header fluxo="Perfil" />

      <div className="perfil-container">
        <h1>{usuario.nome}</h1>
        <p>{usuario.email}</p>

        <div className="perfil-metricas">
          <p>Quantidade de publicação:</p>
          <div className="perfil-box">{usuario.publicacoes}</div>

          <p>Quantidade de pontos:</p>
          <div className="perfil-box">{usuario.pontos}</div>
        </div>

        <RankingPontos usuario={usuario} ranking={ranking} />
      </div>
    </div>
  );
}
