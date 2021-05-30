import React from 'react'
import { NavBar } from './NavBar';
import {AboutScreen} from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <AboutScreen/>
            </Route>
            <Route exact path="/login">
              <LoginScreen/>
            </Route>
            <Route exact path = "/">
              <HomeScreen/>
            </Route>
            <Route component = {HomeScreen}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
