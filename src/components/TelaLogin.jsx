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
        <div className="BotaoVoltarTelaLogin">
          <Botao link="/paginaInicial" texto="Voltar" />
        </div>
      </div>
    </div>
  );
};

export default Login;
