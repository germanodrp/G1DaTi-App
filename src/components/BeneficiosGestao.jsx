import React from "react";
import BeneficiosGestaoTi from "../images/beneficios.jpg";

const BeneficiosGestao = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1 className="BeneficiosGestao">Porque ter estratégias ?</h1>
        <h1 className="TextoBeneficiosGestaoInformativo">
          Ter estratégias de atuação faz com que o setor se torne mais ativo e
          deixe de ser chamado apenas para resolver eventuais dificuldades com
          tecnologia. A proatividade permite que o time detecte problemas que a
          administração não sabe como resolver ou nem sequer notou que existem,
          e encontre soluções para eles. Além disso, um TI estratégico também
          traz mais dinamismo para as equipes e otimiza a produtividade do dia a
          dia de todas as áreas.
          <br />
          <br></br>
          <h1>Beneficios:</h1>
          <br />
          <h3 className="Beneficios">
            ✅Acompanhamento do desempenho das equipes de suporte
          </h3>
          <br />
          <h3 className="Beneficios">✅Redução de custos na área de TI</h3>
          <br />
          <h3 className="Beneficios">✅Aumento da segurança da informação</h3>
          <br />
          <h3 className="Beneficios">✅Atendimento mais eficaz</h3>
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${BeneficiosGestaoTi})` }}
        className="BeneficiosGestaoImg"
      ></div>
    </section>
  );
};

export default BeneficiosGestao;
