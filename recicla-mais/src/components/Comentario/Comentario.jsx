import { useState } from "react";
import { FaThumbsUp, FaComment, FaPaperPlane } from "react-icons/fa";
import "./Comentario.css";

export default function Comentario({ post, comentarios, onClose }) {
  const [novoComentario, setNovoComentario] = useState("");

  const enviarComentario = () => {
    if (!novoComentario.trim()) return;

    alert(`Comentário enviado: ${novoComentario}`);
    setNovoComentario("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarComentario();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>

        <h3>
          {post.nome} <span className="pontos">({post.pontos} pontos)</span>
        </h3>
        <p className="post-texto">{post.texto}</p>

        <div className="post-acoes">
          <button className="comenter-btn">
            <FaThumbsUp /> Gostei ({post.curtidas})
          </button>
          <button className="comenter-btn">
            <FaComment /> Comentarios ({post.comentarios})
          </button>
        </div>

        <div className="input-comentario-container">
          <textarea
            className="comentario-input"
            placeholder="Escreva sua mensagem..."
            value={novoComentario}
            onChange={(e) => setNovoComentario(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button
            className="enviar-btn"
            onClick={enviarComentario}
            aria-label="Enviar comentário"
            type="button"
          >
            <FaPaperPlane />
          </button>
        </div>

        <div className="comentarios-lista">
          {comentarios?.map((comentario, index) => (
            <div key={index} className="comentario-item">
              <strong>{comentario.nome}</strong>
              <p>{comentario.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}