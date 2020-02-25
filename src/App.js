import React, { Component } from 'react';
import './App.css';
//import Messages from './Messages';
//import TheDate from './state/TheDate';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>RouletteGun</h2>
        <RouletteGun />
      </div>
      //<div><TheDate /></div>
    )
  }
}

export default App;