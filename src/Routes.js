import React from "react";
import {Route, Switch} from 'react-router-dom';


import Artigo from './pages/Artigo';
import Beneficios from "./pages/Beneficios";
import GestaoEstrategica from "./pages/GestaoEstrategica";
import PaginaInicial from "./pages/PaginaInicial";
import Contato from "./pages/Contato";
import Loguin from "./pages/Loguin";
import TelaCadastro from "./pages/TelaCadastro";
import Entrevista from "./pages/Entrevista";

function Routes (){
    return(

            <Switch>
                <Route path="/paginaInicial"  component={PaginaInicial}/>
                <Route path="/artigo"  component={Artigo}/>
                <Route path="/gestaoEstrategica" component={GestaoEstrategica}/>
                <Route path="/beneficios" component={Beneficios}/>
                <Route path="/entrevista" component={Entrevista}/>
                <Route path="/contato" component={Contato}/>
                <Route path="/cadastro" component={TelaCadastro}/>
                <Route path="/" component={Loguin}/>
            </Switch>
        
    );
};

export default Routes;