import './Cadastro.css';
import Input from '../../components/Input/Input';
import Botao from '../../components/Botao/Botao';
import { useForm } from 'react-hook-form';

interface FormValues {
  nome: string;
  email: string;
  senha: string;
}

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="tela">
      <div className="container">
        <img src="/logo.png" alt="Logo Recicla+" className="logo" />
        <h1 className="titulo">Recicla<span className="plus">+</span></h1>
        <p className="subtitulo">Cadastre-se</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Nome"
            type="text"
            error={errors.nome?.message}
            {...register('nome', { required: 'Nome é obrigatório' })}
          />
          <Input
            label="Email"
            type="email"
            error={errors.email?.message}
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'E-mail inválido'
              }
            })}
          />
          <Input
            label="Senha"
            type="password"
            error={errors.senha?.message}
            {...register('senha', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter pelo menos 6 caracteres'
              }
            })}
          />
          <Botao texto="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default Cadastro;