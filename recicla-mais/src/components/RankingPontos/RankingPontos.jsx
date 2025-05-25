import "./RankingPontos.css";

export default function RankingPontos({ usuario, ranking }) {
  const rankingOrdenado = [...ranking].sort((a, b) => b.pontos - a.pontos);

  const posicaoUsuario = rankingOrdenado.findIndex(
    (user) => user.nome === usuario.nome
  ) + 1;

  return (
    <div className="ranking-container">
      <div className="ranking-header">
        <h3>Rank de pontos</h3>
        <span>Sua posição: {posicaoUsuario}°</span>
      </div>
      <table>
        <thead className="tabela-titulo">
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {rankingOrdenado.map((user, index) => (
            <tr
              key={index}
              className={user.nome === usuario.nome ? "ranking-destaque" : ""}
            >
              <td>{index + 1}°</td>
              <td>{user.nome}</td>
              <td>{user.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
