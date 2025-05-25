import "./Post.css";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import curtirPublicacao from "./Post.service";

export default function Post({
  id,
  nome,
  pontos,
  texto,
  curtidas,
  comentarios,
  atualizarPosts,
  onComentarioClick
}) {
  async function curtir(id) {
    await curtirPublicacao(id);
    atualizarPosts();
  }

  return (
    <div className="post-wrapper">
      <div className="post-container">
        <div className="post-header">
          <strong>{nome}</strong>{" "}
          <span className="post-pontos">({pontos} pontos)</span>
        </div>
        <p className="post-texto">{texto}</p>
        <div className="post-acoes">
          <button className="post-btn" onClick={() => curtir(id)}>
            <FaThumbsUp className="post-icon" />
            Curtidas ({curtidas})
          </button>
          <button className="post-btn" onClick={onComentarioClick}>
            <FaComment className="post-icon" />
            Comentar ({comentarios})
          </button>
        </div>
      </div>
    </div>
  );
}
