import React from 'react';
import './App.css';
import Header from './Header';
import Footerr from './Footerr';
function App() {
  return (
    <div class="outer-most-margin">
      {/* main comtainer  */} 
      <div class="main-body" >
        <Header /> 
        <Footerr />
      </div>
    </div>
  );
}

export default App;