import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import TcomTop from './TcomTop';
import TcomNew from './TcomNew';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/new">
            <TcomNew />
          </Route>
          <Route path="/">
            <TcomTop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
