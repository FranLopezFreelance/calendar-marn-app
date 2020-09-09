import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from '../components/auth/AuthPage';
import { CalendarPage } from '../components/calendar/CalendarPage';

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/auth' component={AuthPage} />
          <Route exact path='/' component={CalendarPage} />
          <Redirect to='/' />
        </Switch>
    </Router>
  )
}
