import React from 'react';
import { RouteProps as ReacDOMRouteProps, Switch } from 'react-router-dom';

import Route from '../routes/Route';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const LayoutPrimary: React.FC<ReacDOMRouteProps> = (props: any) => {
  const { match } = props;
  return (
    <>
      <div className="">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} isPrivate />
          {/* <Route path="/product" component={Product} /> */}
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default LayoutPrimary;
