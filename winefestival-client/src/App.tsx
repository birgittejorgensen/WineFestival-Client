import * as React from 'react';
import { Switch, Route } from 'react-router';
import LoginPage from './pages/login/LoginPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import './App.css';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
};

export default App;
