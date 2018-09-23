import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import Us from './Components/Us/Us.js'
import Contact from './Components/Contact/Contact.js' 
import 'tachyons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Us />
        {/*<Demo /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
