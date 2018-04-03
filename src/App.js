import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Html from './components/Html/Html';

class App extends Component {
  render() {
    return (
      <div className="App">
       <HashRouter>
          <Switch>
            <Route path='/' component={ Login } exact />
            <Route path='/dashboard' component={ Dashboard } />
            <Route path='/profile' component={ Profile } />
            <Route path='/html' component={Html} />
          </Switch>
       </HashRouter>
      </div>
    );
  }
}

export default App;
