import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ServicePage from './ServicePage';
//import Header from './Header';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/service/:id' component={ServicePage} id=':id'/>
        </Switch>
    </main>
);

export default Main;