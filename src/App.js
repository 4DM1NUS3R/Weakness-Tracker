import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navigation from './Pages/Navigation';
import Prevention from './Pages/Prevention';
import Analyse from './Pages/analyse';

import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route path="/" exact component={Home} />
        <Route path="/Prevention" exact component={Prevention}/>
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/analyse" exact component={Analyse} />
        



      </Router>
    </div>
  );
}

export default App;
