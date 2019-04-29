import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Blamely from './components/Blamely'

class App extends Component {

    render(){
      return (
        <div className="App">
          <Blamely />
        </div>  
      );
  }
  
}

export default App;