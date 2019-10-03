import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

//importação das views
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

//rotas da aplicação
export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {Login}/>
                <Route path="/dashboard" component = {Dashboard}/>
                <Route path="/new" component = {New}/>
            </Switch>
        </BrowserRouter>
    );
}