import React from 'react';
import { Link } from 'react-router-dom';
import Botao from './botaoLoguin';


const BarraDeTarefas = () => {
    return ( 
        <nav className="navigation">
            <a href="/paginaInicial" className="logo">G<span>1</span> <span>Da</span> Ti</a>
            <ul className="nav-menu">
                <li className="nav-item"><Link to="/artigo">Artigo </Link></li>
                <li className="nav-item"><a href="/gestaoEstrategica">O Que é Gestão Estratégica de Ti</a></li>
                <li className="nav-item"><a href="/beneficios">Beneficios da Gestão </a></li>
                <li className="nav-item"><a href="/contato">Contato</a></li>
                <Botao />
                <i className='bx bx-search'></i>
            </ul>
            <div className="menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
     );
}
 
export default BarraDeTarefas;

