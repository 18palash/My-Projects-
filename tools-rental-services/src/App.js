import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
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
          </switch>
          
          
          <Footerr />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;