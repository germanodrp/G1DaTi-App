import React from 'react';
import { Link } from 'react-router-dom';

const BarraDeTarefas = () => {
    return ( 
        <nav class="navigation">
            <a href="/paginaInicial" class="logo">G<span>1</span> <span>Da</span> Ti</a>
            <ul class="nav-menu">
                <li class="nav-item"><Link to="/artigo">Artigo </Link></li>
                <li class="nav-item"><a href="/gestaoEstrategica">O Que é Gestão Estratégica de Ti</a></li>
                <li class="nav-item"><a href="/beneficios">Beneficios da Gestão </a></li>
                <li class="nav-item"><a href="html/contatos.html">Contato</a></li>
                <i class='bx bx-search'></i>
            </ul>
            <div class="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
     );
}
 
export default BarraDeTarefas;

