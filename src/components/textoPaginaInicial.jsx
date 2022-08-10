
import React from 'react';
import Image from '../images/VoIP.png';


const TextoPaginaInicial = () => {
    return ( 

        <section class="home">
            <div class="homeTextoPaginaInicial">
                <h4 class="text-h4">Bem Vindo,Ao site de informações de TI.</h4>
                <h1 class="text-h1">Contém respostas de perguntas frequentes e informações adicionais</h1>
                <p>aproveite,e fique por dentro ! Faça seu login</p>
                <a href="#" class="home-btn">Login </a>
            </div>
            <div class="home-img">
                <img src={Image} alt="Ti"/>
            </div>
        </section>
     );
}
 
export default TextoPaginaInicial;