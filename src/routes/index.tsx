import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Cart from '../pages/Cart';

import Product from '../pages/Product';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Layout>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" exact component={Home} />
      <Route path="/products/:slug/:id" component={Product} />
      <Route path="/cart" component={Cart} />
    </Layout>
  </Switch>
);

export default Routes;
