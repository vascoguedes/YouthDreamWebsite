import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import NahirODS from './components/pages/NahirODS';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Nahir&ODS' exact component={NahirODS} />          
        </Switch>
      </Router>
    </>
  );
}

export default App;
