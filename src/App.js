import React, { Component } from 'react';
import WeatherSystem from './WeatherSystem';

import './App.css';

class App extends Component {
  state = { 
   }

  render() { 
    return ( 
      <div className="App">
          <WeatherSystem/>
      </div>
     );
  }
}
 
export default App;
