import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Label from './components/Label'

const Router = () => (
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/label/:hashtag" component={Label}/>
  </Switch>
);

export default Router;