import './Botao.css';

interface BotaoProps {
  texto: string;
  onClick?: () => void;
}

const Botao = ({ texto, onClick }: BotaoProps) => (
  <button className="botao" type="submit" onClick={onClick}>
    {texto}
  </button>
);

export default Botao;
