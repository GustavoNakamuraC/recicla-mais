import "./Home.css";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Comentario from "../../components/Comentario/Comentario";
import { useState } from "react";

export default function Home() {
  const posts = [
    {
      nome: "Joao",
      pontos: 4,
      texto: "quero loira",
      curtidas: 5,
      comentarios: 4,
      comentariosList: [
        { nome: "Ana", texto: "Interessante" },
        { nome: "Bruno", texto: "Legal isso!" },
      ],
    },
    {
      nome: "GaloFrito",
      pontos: 4,
      texto: "Quero pizza",
      curtidas: 5,
      comentarios: 4,
      comentariosList: [
        { nome: "Carlos", texto: "Qual sabor?" },
        { nome: "Debora", texto: "Quero também!" },
      ],
    },
    {
      nome: "Pinchola",
      pontos: 4,
      texto: "banheta",
      curtidas: 5,
      comentarios: 4,
      comentariosList: [
        { nome: "Lucas", texto: "KKKKKKK" },
        { nome: "Maria", texto: "socorro" },
      ],
    },
  ];

  const [comentarioAberto, setComentarioAberto] = useState(false);
  const [postSelecionado, setPostSelecionado] = useState(null);

  const abrirComentario = (post) => {
    setPostSelecionado(post);
    setComentarioAberto(true);
  };

  const fecharComentario = () => {
    setComentarioAberto(false);
    setPostSelecionado(null);
  };

  return (
    <>
      <div className={`Home-Page ${comentarioAberto ? "blur" : ""}`}>
        <Header fluxo="Home" />
        {posts.map((post, index) => (
          <Post
            key={index}
            nome={post.nome}
            pontos={post.pontos}
            texto={post.texto}
            curtidas={post.curtidas}
            comentarios={post.comentarios}
            onComentarioClick={() => abrirComentario(post)}
          />
        ))}
      </div>
      {comentarioAberto && (
        <Comentario
          post={postSelecionado}
          comentarios={postSelecionado.comentariosList}
          onClose={fecharComentario}
        />
      )}
    </>
  );
}
