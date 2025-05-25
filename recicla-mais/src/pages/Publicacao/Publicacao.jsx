import { useState } from "react";
import "./Publicacao.css";
import Header from "../../components/Header/Header";

export default function Publicacao({ usuario }) {
  const [texto, setTexto] = useState("");

  const maxCaracteres = 300;

  const handleSubmit = () => {
    if (texto.trim() === "") return;
    console.log("Publicação enviada:", texto);
    setTexto("");
  };

  return (
    <div className="container-publicacao">
      <Header fluxo="" />
      <div className="nova-publicacao-container">
        <h2>João</h2>
        <div className="publicacao-box">
          <textarea
            maxLength={maxCaracteres}
            placeholder="Escreva sua publicação..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <div className="rodape-publicacao">
            <span>
              {texto.length}/{maxCaracteres}
            </span>
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
