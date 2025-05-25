import './Botao.css';

const Botao = ({ texto, onClick }) => (
  <button className="botao" type="submit" onClick={onClick}>
    {texto}
  </button>
);

export default Botao;
