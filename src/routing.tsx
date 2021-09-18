import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainNav } from './components/mainNav';
import { Ansatte, Main, Projects } from './pages';

const Routing = () => {
  return (
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route exact path="/Project" component={Projects} />
        <Route exact path="/ansatte" component={Ansatte} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routing;
