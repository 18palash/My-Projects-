import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Footerr from './components/Footerr';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div class="outer-most-margin">
        {/* main comtainer  */} 
        <div class="main-body" >
          <Header />
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </switch>
          
          
          <Footerr />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;