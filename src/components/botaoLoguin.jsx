import React from "react";
import { Link } from "react-router-dom";

const Botao = ({ texto, link }) => {
  return (
    <div>
      <Link to={link} class="home-btn" id="botaoVoltarDoLogin">
        {texto}
      </Link>
    </div>
  );
};

export default Botao;
