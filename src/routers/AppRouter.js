import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
