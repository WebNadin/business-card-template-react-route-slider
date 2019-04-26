import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projekte from './Projekte';
import Studierende from './Studierende';
import Unternehmen from './Unternehmen';
import ZurPerson from './ZurPerson';
import Abschlussarbeiten from './Abschlussarbeiten';
import Kontakt from './Kontakt';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aktuelles' component={Home} id=':id'/>
            <Route path='/projekte' component={Projekte} id=':id'/>
            <Route path='/studierende' component={Studierende} id=':id'/>
            <Route path='/unternehmen' component={Unternehmen} id=':id'/>
            <Route path='/zur-person' component={ZurPerson} id=':id'/>
            <Route path='/abschlussarbeiten' component={Abschlussarbeiten} id=':id'/>
            <Route path='/kontakt' component={Kontakt} id=':id'/>
        </Switch>
    </main>
);

export default Main;