import React, { Component } from 'react';

import '../Styles/App.css';
import { Button } from './Button';
import { Display } from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: "HEY",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Display text={this.state.displayText} />
          </div>
          <div className="row">
            <Button content="(" buttonStyles="paren" />
            <Button content=")" buttonStyles="paren" />
            <Button content="AC" buttonStyles="clear" />
          </div>
          <div className="row">
            <Button content="7" buttonStyles="num-button" />
            <Button content="8" buttonStyles="num-button" />
            <Button content="9" buttonStyles="num-button" />
            <Button content="/" buttonStyles="operator-button" />
          </div>  
          <div className="row">
            <Button content="4" buttonStyles="num-button" />
            <Button content="5" buttonStyles="num-button" />
            <Button content="6" buttonStyles="num-button" />
            <Button content="X" buttonStyles="operator-button" />
          </div>    
          <div className="row">
            <Button content="1" buttonStyles="num-button" />
            <Button content="2" buttonStyles="num-button" />
            <Button content="3" buttonStyles="num-button" />
            <Button content="-" buttonStyles="operator-button" />
          </div>  
          <div className="row">
            <Button content="0" buttonStyles="num-button" />
            <Button content="." buttonStyles="num-button" />
            <Button content="=" buttonStyles="equals-button" />
            <Button content="+" buttonStyles="operator-button" />
          </div>                 
        </div>
      </div>
    );
  }
}

export default App;
