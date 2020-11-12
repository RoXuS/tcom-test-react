import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Header';
import TcomTop from './TcomTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <TcomTop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
