// Home.jsx
import "./Home.css";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Comentario from "../../components/Comentario/Comentario";

import { useState, useEffect } from "react";
import { listarPosts, listarComentarios } from "./HomeService";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [quantidadeComentarios, setQuantidadeComentarios] = useState({});

  async function carregarPosts() {
    try {
      const response = await listarPosts();
      setPosts(response);

      const quantidades = {};
      for (const post of response) {
        const comentarios = await listarComentarios(post.id);
        quantidades[post.id] = comentarios.length;
      }
      setQuantidadeComentarios(quantidades);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
      setPosts([]);
    }
  }

  useEffect(() => {
    carregarPosts();
  }, []);

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
            id={post.id}
            nome={post.usuario.nome}
            pontos={post.usuario.pontos}
            texto={post.conteudo}
            curtidas={post.curtidas}
            comentarios={quantidadeComentarios[post.id] || 0}
            atualizarPosts={carregarPosts}
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
