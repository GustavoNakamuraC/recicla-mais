import "./Login.css";
import Input from "../../components/Input/Input";
import Botao from "../../components/Botao/Botao";
import Logo from "../../assets/Logo.png";
import { useForm } from "react-hook-form";
import logar from './LoginService'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await logar({email, senha});
    navigate('/');
    console.log("Tentando login com:", data);
  };

  return (
    <div className="tela-login">
      <div className="container-login">
        <img src={Logo} alt="Logo" className="logo-login" />
        <h1 className="titulo-login">Recicla<span className="plus-login">+</span></h1>
        <p className="subtitulo-login">Faça seu Login</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="Email"
            type="email"
            value={email}
            {...register("email", { required: "Email é obrigatório" })}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            {...register("senha", { required: "Senha é obrigatória" })}
            error={errors.senha?.message}
            value={senha}
          />
          <Botao texto="Entrar" />
        </form>
      </div>
    </div>
  );
}
