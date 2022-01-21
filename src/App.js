import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' exact component={Contact} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
