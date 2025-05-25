import './Botao.css';

export default function Botao({ texto, onClick }) {
  return (
    <button className="botao" type="submit" onClick={onClick}>
      {texto}
    </button>
  );
}

