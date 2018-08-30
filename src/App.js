import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import FirstPG from './Components/FirstPG';
import Body from './Components/Body';
import How from './Components/How';
import Footer from './Components/Footer';

class App extends Component {
constructor() {
    super();
    this.state = {
      route : ''
    }
  }

  render() {
    return (
      <div className="App">

        <Navigation />
        <FirstPG />
        <Body />  
        <How />
        <How />
        <How />
        <Footer />   

      </div>
    );
  }
}

export default App;
