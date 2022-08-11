import ImageTi from "../images/fotoArtigo.jpg";
import React from "react";

const gestaoEstrategicaTi = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1 className="textoGestao">Por que ter Estrategia ?</h1>
        <h1 className="textoGestaoInformativo">
          A gestão estratégica de TI existe dentro da Governança de TI, que é um
          conjunto de práticas para gerir os recursos e ferramentas da área.
          Tendo visão objetiva de otimizar tanto os processos quanto os
          resultados dentro empresa. Com um TI estratégico, o setor passa a
          trabalhar em prol de coisas como o aumento da produtividade dos demais
          setores, da economia de recursos e aumento das vendas. Assim, o time
          direciona seus esforços em otimizar o desempenho das outras equipes e,
          por consequência, da empresa no geral. Com profissionais bem
          capacitados e engajados, a Tecnologia da Informação deixa de ser
          apenas o time que entrega ferramentas e recursos para a execução dos
          planos da empresa, para se tornar uma parte ativa desses projetos.
          Também é bom lembrar que, atualmente, a informação é um patrimônio da
          empresa. Por isso, precisa ser gerida por profissionais competentes e
          bem treinados. Pois, más escolhas podem gerar gastos desnecessários e
          perda de desempenho e competitividade. Baseado na explicação e neste
          cenário, investir em uma gestão estratégica pode te poupar uma dor de
          cabeça enorme e alinhamento competente e até mesmo uma boa otimização
          no ambiente de trabalho.
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${ImageTi})` }}
        className="GestaoEstrategicaImg"
      ></div>
    </section>
  );
};

export default gestaoEstrategicaTi;
