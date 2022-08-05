import React from "react";
import {Route, Switch} from 'react-router-dom';

import Artigo from './pages/Artigo';
import Beneficios from "./pages/Beneficios";
import GestaoEstrategica from "./pages/GestaoEstrategica";
import PaginaInicial from "./pages/PaginaInicial";

function Routes (){
    return(

            <Switch>
                <Route path="/paginaInicial"  component={PaginaInicial}/>
                <Route path="/artigo"  component={Artigo}/>
                <Route path="/gestaoEstrategica" component={GestaoEstrategica}/>
                <Route path="/beneficios" component={Beneficios}/>
            </Switch>
        
    );
};

export default Routes;