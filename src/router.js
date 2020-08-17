import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Label from './Label'

const Router = () => (
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/label/:hashtag">
          <Label/>
      </Route>
  </Switch>
);

export default Router;