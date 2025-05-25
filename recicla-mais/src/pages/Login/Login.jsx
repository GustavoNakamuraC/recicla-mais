import "./Login.css";
import Input from "../../components/Input/Input";
import Botao from "../../components/Botao/Botao";
import Logo from "../../assets/Logo.png";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Tentando login com:", data);
    // Faz seu trabalho ai Galão da massa
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
            {...register("email", { required: "Email é obrigatório" })}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            {...register("senha", { required: "Senha é obrigatória" })}
            error={errors.senha?.message}
          />
          <Botao texto="Entrar" />
        </form>
      </div>
    </div>
  );
}
