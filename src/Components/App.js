import React, { Component } from 'react';

import '../Styles/App.css';
import { Button } from './Button';
import { Display } from './Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayText: "",
    };

    this.operators = ["/","X","+","-"];
    this.period = ".";
    this.leftParen = "(";
    this.rightParen = ")";

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleParenClick = this.handleParenClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
    this.handleEqualsClick = this.handleEqualsClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }    

  handleNumberClick(e) {
    this.setState({
      displayText: this.state.displayText + e.target.innerText
    })
  }

  handleParenClick(e) {    
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";
    const isLeftParenAndFirstCharEntered = entered === this.leftParen && lastChar === "" ? true : false;

    if (isLeftParenAndFirstCharEntered) {
      this.setState({
        displayText: this.state.displayText + e.target.innerText
      })
    } else if (entered === this.leftParen) {  
      if (this.isANumber(lastChar)) {
        this.setState({
          displayText: this.state.displayText + e.target.innerText
        })
      }     
    } else if (entered === this.rightParen) {
      //TODO match parens
      if (this.isANumber(lastChar)) {
        this.setState({
          displayText: this.state.displayText + entered
        })
      } 
    } 
  }

  handleOperatorClick(e) {
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";

    if (this.isANumber(lastChar)) {
      this.setState({
        displayText: this.state.displayText + entered
      })
    }
  }

  handleClearClick() {
    this.setState({
      displayText: ""
    })
  }

  handlePeriodClick(e) {
    const entered = e.target.innerText;
    const lastChar = this.state.displayText.length > 0 ? this.state.displayText[this.state.displayText.length - 1] : "";

    if(this.isANumber(lastChar)){
      this.setState({
        displayText: this.state.displayText + entered
      })
    }
  }

  handleEqualsClick(e) {
    // const equals = "=";  
    //handle equals
      // remove trailing periods/operands/parens 
      // divide by zero = NaN 
      // determine other calculator scenarios 
      // shunt ladder?
      // update display text with answer
  }

  // helper methods
  isANumber(lastChar) {
    const isLastCharAnOperator = this.operators.indexOf(lastChar) >= 0;
    const isLastCharAPeriod = lastChar === this.period;
    const isLastCharAParen = lastChar === this.leftParen || lastChar === this.rightParen;
    const isLastCharEmpty = lastChar === "";

    if (!isLastCharEmpty && !isLastCharAnOperator && !isLastCharAParen && !isLastCharAPeriod) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Display text={this.state.displayText} />
          </div>
          <div className="row">
            <Button content="(" buttonStyles="paren" handleClick={this.handleParenClick} />
            <Button content=")" buttonStyles="paren" handleClick={this.handleParenClick} />
            <Button content="AC" buttonStyles="clear" handleClick={this.handleClearClick} />
          </div>
          <div className="row">
            <Button content="7" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="8" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="9" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="/" buttonStyles="operator-button" handleClick={this.handleOperatorClick} />
          </div>  
          <div className="row">
            <Button content="4" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="5" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="6" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="X" buttonStyles="operator-button" handleClick={this.handleOperatorClick}  />
          </div>    
          <div className="row">
            <Button content="1" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="2" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="3" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="-" buttonStyles="operator-button" handleClick={this.handleOperatorClick} />
          </div>  
          <div className="row">
            <Button content="0" buttonStyles="num-button" handleClick={this.handleNumberClick} />
            <Button content="." buttonStyles="num-button" handleClick={this.handlePeriodClick} />
            <Button content="=" buttonStyles="equals-button" />
            <Button content="+" buttonStyles="operator-button" handleClick={this.handleOperatorClick}  />
          </div>                 
        </div>
      </div>
    );
  }
}

export default App;
