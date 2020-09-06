import React, { Fragment } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />

      <div className='container mt-2'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/heroe/:heroeId' component={HeroScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/search' component={SearchScreen} />

          {/* Si no viene ninguna de estas rutas anteriores me hace esto */}
          <Redirect to='/marvel' />
        </Switch>
      </div>
    </div>
  );
};
