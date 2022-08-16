import React from "react";
import UniaraxaLogo from "../images/unia.png";
import { Link } from "react-router-dom";

const ContatoComponent = () => {
  return (
    <section className="home">
      <div className="homeContato">
        <p className="SubTitulos">Nome:</p>
        <h1 className="ContatoNome">Germano Pereira</h1>
        <br />

        <p className="SubTitulos">Descrição:</p>
        <p className="DescricaoContato">
          Sou estudante na Uniaraxá,em Sistemas de Informações.
          <br />
          Tenho 21 Anos,Atualmente estou no 6 período e trabalhando de
          estagiário de Back-End na Bit Pagg.
        </p>
        <br />

        <h1 className="TituloRedeSocial">Redes Socias e Contatos:</h1>
        <br />
        <p className="SubTitulos">Email:</p>
        <h3 className="RedesSociais">✉ germanodrp18@gmail.com</h3>
        <br />
        <p className="SubTitulos">Linkedin:</p>
        <h3 className="RedesSociais">
          <Link>linkedin.com/in/germano-pereira-b098331b8</Link>
        </h3>
        <br />
        <p className="SubTitulos">GitHub:</p>
        <h3 className="RedesSociais">
          <Link>https://github.com/germanodrp</Link>
        </h3>
      </div>
      <div
        style={{ backgroundImage: `url(${UniaraxaLogo})` }}
        className="UniaraxaImg"
      ></div>
    </section>
  );
};

export default ContatoComponent;
