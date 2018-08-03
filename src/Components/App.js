import React, { Component } from 'react';

import '../Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <div className="red"></div>
            <div className="green"></div>
            <div className="orange"></div>
          </div>
          <div className="row">
            <div className="blue"></div>
            <div className="pink"></div>
            <div className="purple"></div>
          </div>       
        {/* // equals buttons
        // numbers buttons
        // operations buttons 
        // decimal button
        // clear button
        // display screen */}
        </div>
      </div>
    );
  }
}

export default App;
