import "./Home.css";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

export default function Home() {
  const posts = [
    {
      nome: "Joao",
      pontos: 4,
      texto: "quero loira",
      curtidas: 5,
      comentarios: 4,
    },
    {
      nome: "GaloFrito",
      pontos: 4,
      texto: "Quero pizza",
      curtidas: 5,
      comentarios: 4,
    },
    {
      nome: "Pinchola",
      pontos: 4,
      texto: "banheta",
      curtidas: 5,
      comentarios: 4,
    },
  ];

  return (
    <div className="Home-Page">
      <Header />
      {posts.map((post, index) => (
        <Post
          key={index}
          nome={post.nome}
          pontos={post.pontos}
          texto={post.texto}
          curtidas={post.curtidas}
          comentarios={post.comentarios}
        />
      ))}
    </div>
  );
}
