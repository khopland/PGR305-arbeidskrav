import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainNav } from './components/common/mainNav';
import { Ansatte, Main, Prosjekter } from './pages';
import { Kunder } from './pages/kunder';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnsatteProvider } from './context/ansatteContext';
import { KundeProvider } from './context/kundeContext';
import { ProsjektProvider } from './context/prosjektContext';
import { Prosjekt } from './pages/prosjekt';

ReactDOM.render(
  <React.StrictMode>
    <AnsatteProvider>
      <KundeProvider>
        <ProsjektProvider>
          <BrowserRouter>
            <MainNav />
            <Switch>
              <Route exact path="/prosjekt" component={Prosjekter} />
              <Route exact path="/ansatte" component={Ansatte} />
              <Route exact path="/kunder" component={Kunder} />
              <Route exact path="/prosjekt/:prosjektId" component={Prosjekt} />
              <Route path="/" component={Main} />
            </Switch>
          </BrowserRouter>
        </ProsjektProvider>
      </KundeProvider>
    </AnsatteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
