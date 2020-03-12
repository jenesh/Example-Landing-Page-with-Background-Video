import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
