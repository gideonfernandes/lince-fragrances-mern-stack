import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/home"  component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
