import "./Post.css";
import { FaThumbsUp, FaComment } from "react-icons/fa";

export default function Post({
  nome,
  pontos,
  texto,
  curtidas,
  comentarios,
  onComentarioClick,
}) {
  return (
    <div className="post-wrapper">
      <div className="post-container">
        <div className="post-header">
          <strong>{nome}</strong>{" "}
          <span className="post-pontos">({pontos} pontos)</span>
        </div>
        <p className="post-texto">{texto}</p>
        <div className="post-acoes">
          <button className="post-btn">
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
