import React from "react";
import Botao from "../components/botaoLoguin";

const Login = () => {
  return (
    <div className="Login">
      <div className="divDeLogin">
        <h1>Login</h1>
        <div>
          <input
            className="loginInputEmail"
            type="text"
            placeholder="digite seu email"
          />
        </div>

        <div>
          <input
            className="loginInputSenha"
            type="password"
            placeholder="digite sua senha"
          />
        </div>
        <div className="BotaoTelaLogin">
          <Botao link="/paginaInicial" texto="Entrar" />
        </div>
        <div className="DivDoTextoCadastrar">
          <span> Não tem conta ?</span>
          <a href="/cadastro" className="TextoCadastrar">
            Cadastre-se!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
