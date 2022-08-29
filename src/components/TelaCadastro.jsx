import React from "react";
import Botao from "../components/botaoLoguin";

const Cadastro = () => {
  return (
    <div className="Cadastro">
      <div className="divDeCadastro">
        <h1>Cadastrar</h1>
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
        <div>
          <input
            className="loginInputSenhaConfirmacao"
            type="password"
            placeholder="Confirme sua senha"
          />
        </div>
        <div className="BotaoTelaCadastro">
          <Botao link="/" texto="Cadastrar" />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
