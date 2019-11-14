import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './../../routes/Dashboard'
import Relatorio from '../../routes/Relatorio';

import './corpo.css';

export default class Corpo extends Component {
  render() {
    return (
        <main className="container">
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard" exact={true} component={Dashboard}/>
              <Route path="/relatorio" exact={true} component={Relatorio}/>
            </Switch>
          </BrowserRouter>
        </main>
    );
  }
}
